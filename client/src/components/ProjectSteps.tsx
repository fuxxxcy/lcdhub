import styled from "styled-components";
import ProjectStep from "./ProjectStep";

const ProjectStepsLayout = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column-reverse;
  gap: 50px;
  align-items: center;
  padding: 30px 0px;
`;

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