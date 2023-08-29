import { apiLink } from "@/AppRoutes";
import { FilterPanel, GradientMouse, Header, GuideCards, PageNumber, LoaderSeparator } from "@components";
import { ProjectsPageLoader } from "@utils/loaders";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ProjectsPageLayout = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  z-index: 1;
  backdrop-filter: blur(180px);
`;

interface LoaderDataProps {
  data: {
    projects: Project[];
    pageCount: number;
  };
}

export default function ProjectsPage() {
  const [loaderData, setLoaderData] = useState<LoaderDataProps | string>();
  const [pageCount, setPageCount] = useState<number>(1);
  const [projects, setProjects] = useState<Project[]>();

  const location = useLocation();

  useEffect(() => {
    const getData = async (filterParams: FilterParams) => {
      setLoaderData(await ProjectsPageLoader({link: apiLink, filterParams}));
    };

    const filterParams = queryString.parse(location.search) as FilterParams;

    getData(filterParams);
  }, [location]);

  useEffect(() => {
    if (loaderData === 'Network Error' || !(loaderData as LoaderDataProps)?.data)  return;

    const { data } = loaderData as LoaderDataProps;

    data.projects.reverse();

    setProjects(data.projects);
    setPageCount(data.pageCount);
  }, [loaderData]);

  return (
    <LoaderSeparator data={loaderData}>
      <Header/>
      {/* <GradientMouse /> */}
      <ProjectsPageLayout>
        <FilterPanel />
        {projects === undefined ? 
          <span>no data here</span> : 
          <GuideCards cards={projects} />
        }
        <PageNumber maxPage={pageCount} />
      </ProjectsPageLayout>
    </LoaderSeparator>
  );
};