import { PointerEvent, useEffect, useRef, useState } from "react";
import { GradientLayout } from "./styles/GradientMouse";

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