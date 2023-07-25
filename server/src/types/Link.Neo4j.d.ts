import { Node } from "neo4j-driver";
import { Link } from "./Link";

type LinkNeo4j = Node<number, Link>;
