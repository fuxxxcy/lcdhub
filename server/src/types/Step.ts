import { Integer } from "neo4j-driver";

type Step = {
    number: Integer | number,
    name: string,
    description: string,
    cost: Integer | number,
    time: Integer | number
};

export { Step };
