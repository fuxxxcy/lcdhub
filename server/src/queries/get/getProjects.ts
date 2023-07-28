import { Request, Response, NextFunction } from "express";
import { driver } from "../../driver/Neo4j.connect";
import { Project } from "../../types";

const query = async (req: Request, res: Response) => {
  const session = driver.session();
  
  try {
    const queryParams = req.query;
    const { filter, query, page } = queryParams;
    let pageNumber = page ? Number.parseInt(page as string) : 1;


    const result = await session.run(`
      MATCH (projects:Project)
      WHERE toLower(projects.name) CONTAINS "${query ?? ""}"
      ${filter ? `AND ANY(filter IN projects.filters WHERE filter =~ "${filter}")` : ''}
      RETURN projects
    `);

    const projects = result.records.map(record => record.get('projects').properties as Project);

    const response = {
      projects: projects.slice(21 * (pageNumber - 1), 21 * pageNumber),
      pageCount: Math.ceil(projects.length / 21),
    };

    res.json(response);
  } catch (error) {
    console.error('Error executing Neo4j query:', error);
    res.status(500).json({ error: 'Server error' });
  } finally {
    session.close();
  };
};

export default query;