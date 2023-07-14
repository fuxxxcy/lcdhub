import "./styles.css";
import GuideCard from './GuideCard';
import Filter from "./Filter";

const Body = () => {
  return (
    <div className='body'>
      <div className='body_filters'>
        <Filter />
        <div className="body_search">
          <form>
            <div className="body_search__text">Поиск</div>
          </form>
        </div>
      </div>

      <div className="guide_cards">
        <GuideCard/>
        <GuideCard/>
        <GuideCard/>
        <GuideCard/>
        <GuideCard/>
        <GuideCard/>
      </div>
    </div>
  )
};

export default Body;
