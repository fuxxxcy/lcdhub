import TimeFrame from "@/images/TimeFrame";
import { styled } from "styled-components";

const GuideCardLayout = styled.div`
  width: 300px;
  height: 150px;
  padding: 10px;
  border-radius: 2em;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  
  border: 1px solid var(--primarly);
  background-color: var(--background);
`;

const GuideCardTitle = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const GuideCardLogo = styled.img`
  width: 90px;
  aspect-ratio: 1/1;
  flex-shrink: 0;
  border-radius: 20%;
  background: lightgray; 
`;

const GuideCardButton = styled.a`
  width: 91px;
  height: 22px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--primarly);
  color: var(--primarly);
  text-align: center;
  font-family: Roboto;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
`;

const GuideCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  color: var(--text);
`;

const GuideCardInfo = styled.div`
  width: 100%;
  height: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
`;

const GuideCardInfoItem = styled.div<{color?: string}>`
  width: 50px;
  height: 15px;
  margin-right: 10px;
  border-radius: 24em;
  display: flex;
  justify-content: space-evenly;

  background-color: ${props => props.color || "#7CD2B0"};
`;

const GuideCardInfoIcon = styled.div`
  height: fit-content;
  box-sizing: border-box;
`;

const GuideCardInfoText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  color: #1A1A25;
  text-align: center;
  font-family: Roboto;
  font-size: 7px;
`;

const GuideCardName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const GuideCardDescription = styled.div`
font-size: 14px;
`;

const GuideCard = ({id, name, image, description}: Project) => {
  return (
    <GuideCardLayout>
      <GuideCardTitle>
        <GuideCardLogo src={image} alt="place for logo" />
        <GuideCardButton href={id}>Перейти</GuideCardButton>
      </GuideCardTitle>

      <GuideCardContent>
        <GuideCardInfo>
          <GuideCardInfoItem>
            <TimeFrame />
            <GuideCardInfoText>2 мин</GuideCardInfoText>
          </GuideCardInfoItem>
          <GuideCardInfoItem>
            {
              id !== undefined ?
                <GuideCardInfoText>Бесплатно</GuideCardInfoText> :
                <>
                  <GuideCardInfoIcon></GuideCardInfoIcon>
                  <GuideCardInfoText>Бесплатно</GuideCardInfoText>
                </>
            }
          </GuideCardInfoItem>
        </GuideCardInfo>

        <GuideCardName>{name}</GuideCardName>
        <GuideCardDescription>{description.slice(0, 57) + '...'}</GuideCardDescription>
      </GuideCardContent>
    </GuideCardLayout>
  );
};

export default GuideCard;