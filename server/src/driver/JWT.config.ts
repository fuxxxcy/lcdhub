import dotenv from 'dotenv';

dotenv.config();

interface Config {
  JWT_SECRET_KEY: string;
};

export const jwtConfig: Config = {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY ?? "",
};