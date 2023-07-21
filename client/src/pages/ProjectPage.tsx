import { apiLink } from "@/AppRoutes";
import { ProjectPageLoader } from "@utils/loaders";
import { FullProject } from "@utils/types/FullProject";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    loaderData && loaderData !== 'Network Error' && setProjectData((loaderData as LoaderDataProps).data[0][0]);  // TODO This is a crutch 🙃
  }, [loaderData]);

  return (
    <div>
      {
        loaderData === undefined ? <span>loading...</span> : 
        projectData === undefined ? <span>no data here</span> : 
        <>
          <div>{projectData.name}</div>
          <img src={projectData.image} alt="" width="200px" />
          <div>{projectData.description}</div>
        </>
      }
    </div>
  );
};