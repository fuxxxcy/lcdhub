import { Node } from "neo4j-driver";
import { Step } from "./Step";

type StepNeo4j = Node<number, Step>;
