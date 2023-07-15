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

interface CardsProps {
  cards: Project[] | undefined;
}

const GuideCards = ({ cards }: CardsProps) => {
  return (
    <GuideCardsLayout>
      {cards?.map(card => (
        <GuideCard 
          key={card.id}
          id={card.id} 
          name={card.name} 
          image={card.image} 
          description={card.description} 
        />
      ))}
    </GuideCardsLayout>
  );
};

export default GuideCards;