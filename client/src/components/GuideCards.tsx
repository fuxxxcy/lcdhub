import styled from "styled-components";
import GuideCard from "./GuideCard";

const GuideCardsLayout = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;

  @media (width <= 768px) {
    width: min-content;
  }
`;

const GuideCards = () => {
  const demonstrate: Project = {
    id: "123",
    name: "Крутое имя",
    image: "123",
    description: "Крутое длинное описание, которое я не знаю зачем пишу, ведь всё равно обрежу его."
  }

  return (
    <GuideCardsLayout>
      <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
      <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
      <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
      <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
      <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
      <GuideCard id={demonstrate.id} name={demonstrate.name} image={demonstrate.image} description={demonstrate.description} />
    </GuideCardsLayout>
  );
};

export default GuideCards;