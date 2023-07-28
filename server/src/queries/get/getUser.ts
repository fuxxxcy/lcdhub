import { Request, Response, NextFunction } from "express";
import { driver } from "../../driver/Neo4j.connect";
import { User } from "../../types/User";

const query = async (req: Request, res: Response) => {
  const session = driver.session();

  try {
    const queryParams = req.query;
    const { id, name } = queryParams;

    const result = await session.run(`
      MATCH (user:User{id: "${id}", name: "${name}"})
      RETURN user
    `);

    const projects = result.records.map(record => record.get('user').properties as User);

    const response = projects[0];

    res.json(response);
  } catch (error) {
    console.error('Error executing Neo4j query:', error);
    res.status(500).json({ error: 'Server error' });
  } finally {
    session.close();
  };
};

export default query;