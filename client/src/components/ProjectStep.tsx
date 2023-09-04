import MarkdownRenderer from "./MarkdownRenderer";
import { useState } from "react";
import {
  StepLayout,
  StepNameLayout,
  StepName,
  StepShowButton
} from "./styles/ProjectStep";

interface ProjectStepProps {
  step: Step;
};

const ProjectStep = ({step}: ProjectStepProps) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <StepLayout $isHidden={isHidden}>
      <StepShowButton onClick={()=>{setIsHidden(!isHidden)}} />
      <StepNameLayout>
        <StepName><b>{step.number}.</b> {step.name}</StepName>
      </StepNameLayout>
      <MarkdownRenderer content={step.description} />
    </StepLayout>
  );
};

export default ProjectStep;
