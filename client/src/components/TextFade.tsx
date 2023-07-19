import styled from "styled-components";

interface TextFadeProps {
  $isneedtofade: string;
  width?: string;
  height?: string;
  color?: string;
};

const TextFade = styled.div<TextFadeProps>`
  ${(props) => (props.$isneedtofade === "true" ? 
    `
      position: absolute;
      bottom: 0;
      right: 0;
      width: ${props.width ?? "20px"};
      height: ${props.height ?? "60px"};
      ${`background: linear-gradient(to right, transparent, ${props.color ?? `var(--background)`} 70%)`};
    ` : 
    `display: none;`
  )}
`;

export default TextFade;