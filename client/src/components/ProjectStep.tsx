import styled from "styled-components";
import { MarkdownRenderer } from ".";
import { useState } from "react";

const StepLayout = styled.div<{$isHidden: boolean}>`
  width: 100%;
  height: ${({$isHidden}) => ($isHidden ? "100px" : "auto")};
  border-radius: 1em;
  padding: 0px 30px;
  
  border: 1px solid var(--primarly);
  background-color: var(--background);
  filter: var(--drop-shadow-small);
  overflow: hidden;
  transition: all 300ms;

  img {
    width: 80% !important;
    margin: 20px 10%;
  }
`;

const StepNameLayout = styled.div`
  height: 40px;
  width: 100%;
  margin: 30px 0px;
`;

const StepName = styled.span`
  width: 100%;
  line-height: 40px;
  font-size: 24px;
`;

const StepShowButton = styled.button`
  width: 100%;
  height: 100px;
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 0px;
  background: none;
  border: none;
`;

interface ProjectStepProps {
  step: Step;
};

const ProjectStep = ({step}: ProjectStepProps) => {
  const [isHidden, setIsHidden] = useState(true);
  

  return (
    <StepLayout $isHidden={isHidden}>
      <StepShowButton onClick={()=>{setIsHidden(!isHidden)}} />
      <StepNameLayout><StepName><b>{step.number}.</b> {step.name}</StepName></StepNameLayout>
      <MarkdownRenderer content={step.description} />
    </StepLayout>
  );
};

export default ProjectStep;
