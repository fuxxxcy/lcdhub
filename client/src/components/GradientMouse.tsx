import { PointerEvent, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const GradientRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  50% {
    scale: 1.3 1;
  }

  to {
    transform: rotate(360deg);
  }
`;

const GradientLayout = styled.div`
  @media (width > 768px) {
    background: conic-gradient(yellow, aquamarine, mediumpurple);
    height: 400px;
    aspect-ratio: 1 / 1;
    position: fixed;
    border-radius: 50%;
    translate: -50% -50%;
    animation: ${GradientRotate} 20s infinite;
    overflow: hidden;
    filter: blur(200px);
    z-index: -1;
    pointer-events: auto;
  }
`;

const GradientMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseRef = useRef<HTMLDivElement>(null);
  
  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <GradientLayout 
      ref={mouseRef} 
      style={{ top: mousePosition.y, left: mousePosition.x }} 
      onPointerMove={handlePointerMove} 
    />
  );
};

export default GradientMouse;