import { apiLink } from "@/AppRoutes";
import { 
  LoaderSeparator, 
  ProjectSteps, 
  ProjectTitle
} from "@components";
import { ProjectPageLoader } from "@utils/loaders";
import { FullProject } from "@utils/types/FullProject";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ErrorPage from "./ErrorPage";

const ProjectPageLayout = styled.div`
  width: 80%;
  height: fit-content;
  margin: 0px 10%;
`;

interface LoaderDataProps {
  data: FullProject;
}

export default function ProjectPage() {
  const [loaderData, setLoaderData] = useState<LoaderDataProps | string>();
  const params = useParams();
  const [projectData, setProjectData] = useState<FullProject>();

  useEffect(() => {
    const getData = async () => {
      setLoaderData(await ProjectPageLoader({params, link: apiLink}));
    };

    getData();
  }, [params]);

  useEffect(() => {
    loaderData && loaderData !== 'Network Error' 
      && setProjectData((loaderData as LoaderDataProps).data);
  }, [loaderData]);

  return (
    <ProjectPageLayout>
      <LoaderSeparator data={loaderData}>
        {projectData === undefined ? <ErrorPage /> : 
        <>
          <ProjectTitle info={projectData as Project} />
          <ProjectSteps steps={projectData.steps} />
        </>}
      </LoaderSeparator>
    </ProjectPageLayout>
  );
};