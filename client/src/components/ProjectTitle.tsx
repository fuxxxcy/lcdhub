interface ProjectTitleProps {
  info: Project;
};

const ProjectTitle = ({info}: ProjectTitleProps) => {
  const { name, image, description } = info;
  
  return (
    <div>
      <div>{name}</div>
      <img src={image} alt="" width="200px" />
      <div>{description}</div>
    </div>
  );
};

export default ProjectTitle;