import { Request, Response, NextFunction } from "express";
import { driver } from "../../driver/Neo4j.connect";
import FullProject from "../../types/FullProject";

const query = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const session = driver.session();

    const result = await session.run(`
      MATCH (projects:Project{id: "${id}"})-[:Steps]->(steps:Step)
      MATCH (projects)-[:Links]->(links:Link)
      WITH {
        id: projects.id, 
        description: projects.description, 
        name: projects.name, 
        image: projects.image, 
        steps: steps, 
        links: links
      } AS fullProjects
      RETURN apoc.coll.toSet([fullProjects]) AS uniqueResults
    `);

    const fullProjects = result.records.map(record => record.get('uniqueResults')) as unknown as FullProject;
    res.json(fullProjects);
  } catch (error) {
    console.error('Error executing Neo4j query:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default query;