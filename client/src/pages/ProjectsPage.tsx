import FilterPanel from "@components/FilterPanel";
import GradientMouse from "@components/GradientMouse";
import GuideCards from "@components/GuideCards";
import Header from "@components/Header";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import styled from "styled-components";

const ProjectsPageLayout = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(180px);
`;

interface LoaderDataProps {
  data: Project[];
}

export default function ProjectsPage() {
  const LoaderData = useLoaderData();
  const [projects, setProjects] = useState<Project[]>();

  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const filter = queryParams.filter as string | undefined;
  const query = queryParams.query as string | undefined;

  useEffect(() => {
    if (LoaderData === 'Network Error')  return;

    const { data } = LoaderData as LoaderDataProps;

    const cards: Project[] = data.filter((card) => {
      const filterMatch = filter === "all" || filter === undefined || card.filters.includes(filter);
      const queryMatch = query === undefined || card.name.includes(query);

      return filterMatch && queryMatch;
    });

    setProjects(cards);
  }, [LoaderData, filter, location, query]);

  return (
    <>
      <Header/>
      <GradientMouse />
      <ProjectsPageLayout>
        <FilterPanel />
        {
          LoaderData === undefined ? <span>loading...</span> : 
          projects === undefined ? <span>no data here</span> : 
          <GuideCards cards={projects} />
        }
      </ProjectsPageLayout>
    </>
  );
};