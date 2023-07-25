import { StepNeo4j } from "./Step.Neo4j";
import { LinkNeo4j } from "./Link.Neo4j";
import { Project } from "./Project";

type FullProjectNeo4j = Project & {
    steps: StepNeo4j[],
    links: LinkNeo4j[],
};
