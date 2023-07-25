import { Request, Response } from "express";
import { driver } from "../../driver/Neo4j.connect";
import { FullProject, FullProjectNeo4j, Step } from "../../types";
import { Integer } from "neo4j-driver";

const query = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const session = driver.session();

    const result = await session.run(`
      MATCH (project:Project{id: "${id}"})
      WITH project

      OPTIONAL MATCH (project)-[:Steps]->(steps:Step)
      WITH collect(steps) AS projectSteps, project

      OPTIONAL MATCH (project)-[:Links]->(links:Link)
      WITH projectSteps, collect(links) AS projectLinks, project

      RETURN {
        id: project.id, 
        description: project.description, 
        name: project.name, 
        image: project.image, 
        steps: projectSteps, 
        links: projectLinks
      } AS fullProject, projectSteps, projectLinks
    `);

    const fullProjectNeo4j = result.records.map(record => record.get('fullProject'))[0] as FullProjectNeo4j;
    const fullProject: FullProject = {
      id: fullProjectNeo4j.id,
      name: fullProjectNeo4j.name, 
      image: fullProjectNeo4j.image, 
      description: fullProjectNeo4j.description, 
      steps: fullProjectNeo4j.steps.map(step => {
        return {
          number: typeof step.properties.number === 'number' ? step.properties.number : step.properties.number.getLowBits(),
          name: step.properties.name,
          description: step.properties.description,
          cost: typeof step.properties.cost === 'number' ? step.properties.cost : step.properties.cost.getLowBits(),
          time: typeof step.properties.time === 'number' ? step.properties.time : step.properties.time.getLowBits(),
        } satisfies Step;
      }),
      links: fullProjectNeo4j.links.map(link => link.properties)
    }
    res.json(fullProject);
  } catch (error) {
    console.error('Error executing Neo4j query:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default query;