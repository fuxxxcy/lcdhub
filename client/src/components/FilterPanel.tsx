import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Panel, 
  FilterLayout, 
  FilterButton, 
  SearchBar, 
  SearchBarInput, 
  SearchBarSubmit 
} from "./styles/FilterPanel";

const FilterPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [filter, setFilter] = useState<string>();
  const [query, setQuery] = useState<string>();

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryParams = queryString.stringify({
      ...(filter && { filter }),
      ...(query && { query }),
    },
    { encode: false });

    navigate(`/projects${queryParams && `?${queryParams}`}`, { replace: true });
  };

  useEffect(()=> {
    const filterParams: FilterParams = queryString.parse(location.search);

    setFilter(filterParams.filter);
    setQuery(filterParams.query);
  }, [location]);

  return (
    <Panel onSubmit={e => handleSearch(e)}>
      <FilterLayout>
        <FilterButton 
          onClick={() => handleFilterChange("all")} 
          $active={filter === "all"}
        >
          Все
          </FilterButton>
        <FilterButton 
          onClick={() => handleFilterChange("testnets")}
          $active={filter === "testnets"}
        >
          Тестнеты
        </FilterButton>
        <FilterButton 
          onClick={() => handleFilterChange("retrodrops")} 
          $active={filter === "retrodrops"}
        >
          Ретродропы
          </FilterButton>
      </FilterLayout>

      <SearchBar>
        <SearchBarInput placeholder="Поиск" onChange={e => handleQueryChange(e)} />
        <SearchBarSubmit>
          <img src="/assets/img/Search.svg" alt="" />
        </SearchBarSubmit>
      </SearchBar>
    </Panel>
  );
};

export default FilterPanel;