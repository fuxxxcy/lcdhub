import { Integer } from "neo4j-driver";

type User = {
  id: string;
  name: string;
  img?: string | undefined;
  key?: string | undefined;
  wallet?: Integer | number | undefined;
};