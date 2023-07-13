import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

interface LoaderDataProps {
  data: Project[];
}

export default function ProjectsPage() {
  const LoaderData = useLoaderData();
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    LoaderData !== 'Network Error' && setProjects((LoaderData as LoaderDataProps).data);
  }, [LoaderData]);

  return (
    <div>
      {
        LoaderData === undefined ? <span>loading...</span> : 
        projects === undefined ? <span>no data here</span> : 
        projects.map((project, idx) => {
          return <div key={idx}>
            <div>{project.name}</div>
            <img src={project.image} alt="" width="200px" />
            <div>{project.description}</div>
          </div>
        })
      }
    </div>
  );
};