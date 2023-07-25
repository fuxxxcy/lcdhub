import { Node } from "neo4j-driver";
import { Project } from "./Project";

type ProjectNeo4j = Node<number, Project>;
