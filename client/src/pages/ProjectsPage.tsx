import FilterPanel from "@components/FilterPanel";
import GradientMouse from "@components/GradientMouse";
import GuideCards from "@components/GuideCards";
import Header from "@components/Header";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const ProjectsPageLayout = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

interface LoaderDataProps {
  data: Project[];
}

export default function ProjectsPage() {
  const LoaderData = useLoaderData();
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    // LoaderData !== 'Network Error' && setProjects((LoaderData as LoaderDataProps).data);
    LoaderData !== 'Network Error' && setProjects(
      (LoaderData as LoaderDataProps).data
      .concat((LoaderData as LoaderDataProps).data)
      .concat((LoaderData as LoaderDataProps).data)
      .concat((LoaderData as LoaderDataProps).data)
      .concat((LoaderData as LoaderDataProps).data)
      .concat((LoaderData as LoaderDataProps).data)
      .concat((LoaderData as LoaderDataProps).data)
      ); // *! delete this, this is trash for testing
  }, [LoaderData]);

  return (
    <>
      <Header/>
      <ProjectsPageLayout>
        <GradientMouse />
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