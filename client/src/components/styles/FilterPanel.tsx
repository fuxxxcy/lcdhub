import styled from "styled-components";

const Panel = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px 60px;
  width: fit-content;

  @media (width > 768px) {
    flex-direction: row;
  }
`;

const FilterLayout = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 40px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FilterButton = styled.button<{ $active?: boolean | undefined }>`
  text-align: center;
  font-size: 16px;

  width: auto;
  height: fit-content;
  padding: 0px 23px;
  border: none;
  ${({ $active }) => {return $active ? 
    `
      filter: drop-shadow(0px 0px 13px var(--secondary)); 
      color: var(--secondary);
    ` : `
      color: var(--text-aditional);
    `
  }}
  background: none;

  display: flex;
  justify-content: center;
`;

const SearchBar = styled.div`
  position: relative;
  width: 309px;
  height: 40px;
  border-radius: 0.5em;
  margin: auto;

  border: 1px solid var(--primarly);
  background: var(--background);
  overflow: hidden;
`;

const SearchBarInput = styled.input`
  width: calc(100% - 16px);
  height: 100%;
  margin: 0px 8px;
  padding: 0px 25px;
  border: none;
  outline: none;
  background: none;
  color: var(--primarly);
  font-size: 14px;
`;

const SearchBarSubmit = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  height: 21px;
  aspect-ratio: 1 / 1;
  padding: 0px;
  margin: 0px;
  border: none;
  background: none;
`;

export {
  Panel,
  FilterLayout,
  FilterButton,
  SearchBar,
  SearchBarInput,
  SearchBarSubmit
};