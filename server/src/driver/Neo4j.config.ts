import dotenv from 'dotenv';

dotenv.config();

interface Config {
    NEO4J_URI: string;
    NEO4J_USERNAME: string;
    NEO4J_PASSWORD: string;
    AURA_INSTANCEID: string;
    AURA_INSTANCENAME: string;
};

export const neo4jConfig: Config = {
    NEO4J_URI: process.env.NEO4J_URI ?? "",
    NEO4J_USERNAME: process.env.NEO4J_USERNAME ?? "",
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD ?? "",
    AURA_INSTANCEID: process.env.AURA_INSTANCEID ?? "",
    AURA_INSTANCENAME: process.env.AURA_INSTANCENAME ?? ""
};
