import { Request, Response } from "express";
import { jwtConfig } from "../../driver/JWT.config";
import jwt from "jsonwebtoken";

const query = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    const userData = jwt.verify(token, jwtConfig.JWT_SECRET_KEY) ?? undefined;

    res.json(userData);
  } catch(error) {
    console.error('Error executing Neo4j query:', error);
    res.status(500).json({ error: 'Server error' });
  };
};

export default query;