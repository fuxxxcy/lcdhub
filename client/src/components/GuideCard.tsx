import TimeFrame from "@/images/TimeFrame";

const GuideCard = () => {
  return (
    <div className='guide_card'>

      <div className="guide_card__firstblock">
        <div className="guide_card__logo">place for logo</div>
        <div className="guide_card__button">
          <div className="guide_card__button__text">Перейти</div>
        </div>
      </div>

      <div className="guide_card__secondblock">
        <div className="guide_card__info">
          <div className="guide_card__info__time">
            <div className="guide_card__info__time__logo"><TimeFrame/></div>
            <div className="guide_card__info__time__text">2 мин</div>
          </div>
          <div className="guide_card__info__price">
            <div className="guide_card__info__price__logo"></div>
            <div className="guide_card__info__price__text">Бесплатно</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GuideCard;