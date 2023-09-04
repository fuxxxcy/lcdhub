import { Request, Response } from "express";
import axios from "axios";
import { User } from "../../types/User";
import CheckUser from "../CheckUser";
import { jwtConfig } from "../../driver/JWT.config";
import jwt from "jsonwebtoken";

const query = async (req: Request, res: Response) => {
  try {
    const { tokenType, accessToken } = req.body;

    const { data } = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
      },
    });

    const user: User = await CheckUser(data as User);

    console.log(user);

    const token = jwt.sign(user, jwtConfig.JWT_SECRET_KEY, {
      expiresIn: '14d',
    });

    res.json({ token });
  } catch(error) {
    console.error('Error executing Neo4j query:', error);
    res.status(500).json({ error: 'Server error' });
  };
};

export default query;