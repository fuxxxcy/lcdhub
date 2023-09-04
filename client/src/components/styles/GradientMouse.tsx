import styled from "styled-components";
import { keyframes } from "styled-components";

const GradientRotate = keyframes`
  from {
    transform: rotate(0deg);
    scale: 1 1.5;
  }

  50% {
    scale: 1.5 1;
  }

  to {
    transform: rotate(360deg);
    scale: 1 1.5;
  }
`;

const GradientLayout = styled.div`
  @media (width > 768px) {
    background: conic-gradient(var(--primarly), var(--secondary));
    height: 250px;
    aspect-ratio: 1 / 1;
    position: fixed;
    border-radius: 50%;
    translate: -50% -50%;
    animation: ${GradientRotate} 15s infinite;
    overflow: hidden;
    z-index: -1;
    pointer-events: auto;
  }
`;

export {
  GradientLayout
};