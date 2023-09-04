import GuideCard from "./GuideCard";
import { 
  GuideCardsLayout, 
  NoContentInfo, 
  GuideCardWrapLayout 
} from "./styles/GuideCards";

interface CardsProps {
  cards: Project[] | undefined;
}

const GuideCards = ({cards}: CardsProps) => {
  return (
    <GuideCardsLayout>
      {cards?.length === 0 ? 
      <NoContentInfo>No data here</NoContentInfo> : 
      cards?.map(card => (
          <GuideCardWrapLayout key={card.id}>
            <GuideCard {...card} />
          </GuideCardWrapLayout>
        )
      )}
    </GuideCardsLayout>
  );
};

export default GuideCards;