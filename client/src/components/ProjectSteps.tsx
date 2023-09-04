import ProjectStep from "./ProjectStep";
import { ProjectStepsLayout } from "./styles/ProjectSteps";

interface ProjectStepsProps {
  steps?: Step[];
};

const ProjectSteps = ({steps}: ProjectStepsProps) => {
  return (
    <ProjectStepsLayout>
      {steps?.sort(step => step.number).map(step => {
        return <ProjectStep key={step.number} step={step} />
      })}
    </ProjectStepsLayout>
  );
};

export default ProjectSteps;