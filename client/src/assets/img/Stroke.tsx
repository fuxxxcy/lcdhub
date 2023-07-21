import React from 'react'

const Stroke = ({className, color}: SVGImageProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="2" height="25" viewBox="0 0 2 25" fill="none">
      <path d="M0.74823 0.932129V24.0677" stroke={color} />
    </svg>
  );
};

export default Stroke;