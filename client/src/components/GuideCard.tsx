import ProtectedContent from "./ProtectedContent";
import { useContext } from "react";
import UserContext from "@utils/context/UserContext";
import { 
  GuideCardLayout, 
  GuideCardTitle, 
  GuideCardLogo, 
  GuideCardButton, 
  GuideCardContent, 
  GuideCardInfo, 
  GuideCardInfoItem, 
  GuideCardInfoText, 
  GuideCardInfoIcon, 
  GuideCardName, 
  GuideCardDescription,
  TextFade
} from "./styles/GuideCard";

const GuideCard = ({id, name, image, description}: Project) => {
  const { user } = useContext(UserContext);
  const isOpen = 
  user?.role === "OWNER" 
  || (user?.role === "USER" && user.canViewKeys.includes(id))
  || (user?.role === "ADMIN" && (user.canEditKeys.includes(id) || user.canViewKeys.includes(id)));

  return (
    <ProtectedContent isOpen={isOpen}>
      <GuideCardLayout>
        <GuideCardTitle>
          <GuideCardLogo src={image} alt="place for logo" />
          <GuideCardButton href={!isOpen ? `project/${id}` : ''}>Перейти</GuideCardButton>
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