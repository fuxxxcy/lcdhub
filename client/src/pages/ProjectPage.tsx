import { FullProject } from "@/utils/types/FullProject";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

interface LoaderDataProps {
  data: FullProject;
}

export default function ProjectPage() {
  const LoaderData = useLoaderData();
  const [projectData, setProjectData] = useState<FullProject>();

  useEffect(() => {
    LoaderData !== 'Network Error' && setProjectData((LoaderData as LoaderDataProps).data[0][0]);  // TODO This is a crutch 🙃
  }, [LoaderData]);

  return (
    <div>
      {
        LoaderData === undefined ? <span>loading...</span> : 
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