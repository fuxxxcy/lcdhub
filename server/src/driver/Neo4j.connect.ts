import neo4j, { AuthToken, AuthTokenManager, Driver } from "neo4j-driver";
import { neo4jConfig } from "./Neo4j.config";

const authToken: AuthToken | AuthTokenManager = neo4j.auth.basic(
  neo4jConfig.NEO4J_USERNAME, 
  neo4jConfig.NEO4J_PASSWORD
);

export const driver: Driver = neo4j.driver(neo4jConfig.NEO4J_URI, authToken);
