import styled from "styled-components";

const Panel = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px 60px;
  width: fit-content;
  margin: 0px auto 50px;

  @media (width > 768px) {
    flex-direction: row;
  }
`;

const FilterLayout = styled.div`
  width: fit-content;
  border-radius: 24px;
  border: 1px solid var(--primarly);
  background: var(--background);

  margin: 0 auto;
  padding: 6px 0px;

  display: flex;
  justify-content: space-around;
  
  :last-child {
    border: none;
  }
`;

const FilterButton = styled.button`
  color: var(--secondary);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: auto;
  height: 24px;
  padding: 0px 23px;
  border: none;
  border-right: 1px solid var(--primarly);
  background: none;

  display: flex;
  justify-content: center;

  > div {
    width: fit-content;
    height: fit-content;
    margin: auto;
  }
`;

const SearchBar = styled.div`
  width: 309px;
  height: 35px;
  border-radius: 24px;
  margin: auto;

  border: 1px solid var(--primarly);
  background: var(--background);
  overflow: hidden;
`;

const SearchBarInput = styled.input`
  width: calc(100% - 16px);
  height: 100%;
  margin: 0px 8px;
  padding: 2px;

  border: none;
  outline: none;
  background: none;
  color: var(--secondary);
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const FilterPanel = () => {
  return (
    <Panel>
      <FilterLayout>
        <FilterButton>
          <div>Все</div>
        </FilterButton>
        <FilterButton>
          <div>Тестнеты</div>
        </FilterButton>
        <FilterButton>
          <div>Ретродропы</div>
        </FilterButton>
      </FilterLayout>

      <SearchBar>
        <SearchBarInput placeholder="Поиск" />
      </SearchBar>
    </Panel>
  );
};

export default FilterPanel;