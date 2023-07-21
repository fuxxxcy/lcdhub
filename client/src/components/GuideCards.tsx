import styled from "styled-components";
import { GuideCard } from ".";

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
      {cards?.length === 0 ? 
      <div>No data here</div> : 
      cards?.map(card => {
        return <GuideCard 
          key={card.id}
          id={card.id} 
          name={card.name} 
          image={card.image} 
          description={card.description} 
          filters={card.filters}
        />
      })}
    </GuideCardsLayout>
  );
};

export default GuideCards;