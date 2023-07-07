import { Request, Response, NextFunction } from "express";
import { driver } from "../../driver/Neo4j.connect";
import Project from "../../types/Project";

const query = async (req: Request, res: Response) => {
  try {
    const session = driver.session();

    const result = await session.run(`
      MATCH (projects:Project)
      RETURN projects
    `);

    const projects: Project[] = result.records.map(record => record.get('projects').properties);
    res.json(projects);
  } catch (error) {
    console.error('Error executing Neo4j query:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default query;