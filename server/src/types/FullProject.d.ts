import { Link, Project, Step } from ".";

type FullProject = Project & {
    steps?: Step[],
    links?: Link[]
};
