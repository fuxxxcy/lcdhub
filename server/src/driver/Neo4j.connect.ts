import neo4j, { Driver } from "neo4j-driver";
import { config } from "./Neo4j.config";

export const driver: Driver = neo4j.driver(
    config.NEO4J_URI, 
    neo4j.auth.basic(config.NEO4J_USERNAME, config.NEO4J_PASSWORD)
);