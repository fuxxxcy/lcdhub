import GuideCard from './GuideCard';
import FilterPanel from "./FilterPanel";
import GradientMouse from './GradientMouse';

let demonstrate: Project = {
  id: "123",
  name: "Крутое имя",
  image: "123",
  description: "Крутое длинное описание, которое я не знаю зачем пишу, ведь всё равно обрежу его."
}

const Body = () => {
  return (
    <>
      <GradientMouse />
      <FilterPanel />

      <div className="guide_cards">
        <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
        <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
        <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
        <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
        <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
        <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
      </div>
    </>
  );
};

export default Body;
