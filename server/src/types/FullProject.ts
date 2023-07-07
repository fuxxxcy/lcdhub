import Link from "./Link";
import Project from "./Project";
import Step from "./Step";

type FullProject = Project & {
    steps?: Step[],
    links?: Link[]
};

export default FullProject;
