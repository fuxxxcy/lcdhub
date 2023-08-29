import styled from "styled-components";
import { GuideCard } from ".";

const GuideCardsLayout = styled.div`
  max-width: 1200px;
  width: min-content;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  @media (1100px >= width > 768px) {
    grid-template-columns: 1fr 1fr;
    width: fit-content;
  }

  @media (width > 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: fit-content;
  }
`;

const GuideCardWrapLayout = styled.div`
  margin: auto;
  border-radius: 1em;
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
        return (
          <GuideCardWrapLayout key={card.id}>
            <GuideCard 
              id={card.id} 
              name={card.name} 
              image={card.image} 
              description={card.description} 
              filters={card.filters}
            />
          </GuideCardWrapLayout>
        )
      })}
    </GuideCardsLayout>
  );
};

export default GuideCards;