// import TimeFrame from "@/assets/img/TimeFrame.svg";
import { styled } from "styled-components";
import { ProtectedContent, TextFade } from ".";

const GuideCardLayout = styled.div`
  width: 300px;
  height: 170px;
  padding: 10px;
  display: grid;
  grid-template-columns: 120px 160px;
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
  gap: 20px;
`;

const GuideCardLogo = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  flex-shrink: 0;
  border-radius: 20%;
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
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  color: var(--text-additional);
`;

const GuideCardContent = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const GuideCardInfo = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: flex-end;
`;

const GuideCardInfoItem = styled.div<{color?: string}>`
  width: fit-content;
  height: 15px;
  padding: 0px 4px;
  margin-right: 10px;
  border-radius: 24em;
  display: flex;
  justify-content: space-evenly;

  color: var(--text-additional);
  background-color: ${props => props.color || "var(--primarly)"};
`;

const GuideCardInfoIcon = styled.div`
  height: fit-content;
  box-sizing: border-box;
`;

const GuideCardInfoText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  text-align: center;
  font-size: 7px;
`;

const GuideCardName = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: bold;
  color: var(--text-title);
  overflow: hidden;
  text-wrap: nowrap;
`;

const GuideCardDescription = styled.div`
  position: relative;
  max-height: 48px;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 12px;
`;

const GuideCard = ({id, name, image, description}: Project) => {
  return (
    <ProtectedContent isOpen={id === ""}>
      <GuideCardLayout>
        <GuideCardTitle>
          <GuideCardLogo src={image} alt="place for logo" />
          <GuideCardButton href={`project/${id}`}>Перейти</GuideCardButton>
        </GuideCardTitle>

        <GuideCardContent>
          <GuideCardInfo>
            <GuideCardInfoItem>
              <img src="/img/TimeFrame.svg" alt="" />
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

          <GuideCardName>
            {name}
            <TextFade height="100%" $isneedtofade={(name.length >= 18).toString()} />
          </GuideCardName>
          <GuideCardDescription>
            {description.slice(0, 120)}
            <TextFade height="14px" $isneedtofade={"true"} />
          </GuideCardDescription>
        </GuideCardContent>
      </GuideCardLayout>
    </ProtectedContent>
  );
};

export default GuideCard;