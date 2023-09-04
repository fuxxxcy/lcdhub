import styled from "styled-components";

const PageNumberLayout = styled.nav`
  width: 400px;
  height: 30px;
  margin: 20px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const HrefBlock = styled.button<{ $active?: boolean | undefined }>`
  display: block;
  height: fit-content;
  width: 30px;

  text-align: center;
  background: none;
  font-size: 16px;
  border: none;
  
  ${({ $active }) => {return $active ? 
    `
      filter: drop-shadow(0px 0px 13px var(--secondary)); 
      color: var(--secondary);
    ` : `
      color: var(--text-aditional);
    `
  }}
`;

export {
  PageNumberLayout,
  HrefBlock
};