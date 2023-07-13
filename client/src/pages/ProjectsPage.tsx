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
    <div className="flex flex-col items-center">
      {
        LoaderData === undefined ? <span>loading...</span> : 
        projects === undefined ? <span>no data here</span> : 
        projects.map((project, idx) => {
          return <a key={idx} href={`project/${project.id}`} className="flex flex-row rounded-3xl w-3/5 p-2.5 m-5 border-2 border-black gap-x-2.5">
            <img src={project.image} alt="" className="aspect-square w-2/12 rounded-2xl" />
            <div>
              <span className="text-2xl font-bold">{project.name}</span>
              <br />
              <span>{project.description.slice(0, 100) + "..."}</span>
            </div>
          </a>
        })
      }
    </div>
  );
};