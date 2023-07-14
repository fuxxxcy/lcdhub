import Body from "@components/Body";
import Header from "@components/Header";
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
    <>
      <Header/>
      <Body/>
      {/* {
        LoaderData === undefined ? <span>loading...</span> : 
        projects === undefined ? <span>no data here</span> : 
        projects.map((project, idx) => {
          return <a key={idx} href={`project/${project.id}`} >
            <img src={project.image} alt=""/>
            <div>
              <span>{project.name}</span>
              <br />
              <span>{project.description.slice(0, 100) + "..."}</span>
            </div>
          </a>
        })
      } */}
    </>
  );
};