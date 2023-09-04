import styled from "styled-components";

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

export {
  StepLayout,
  StepNameLayout,
  StepName,
  StepShowButton
};