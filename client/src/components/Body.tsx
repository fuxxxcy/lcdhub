import React from 'react'
import "./styles.css";
import Stroke from '@/images/Stroke';
import GuideCard from './GuideCard';

const Body = () => {
    return (
        <div className='body'>
            <div className='body_filters'>
                <div className='body_filter'>
                    <div className='body_filter__default body_filter__all'>Все</div>
                    <div className='body_filter_stroke'><Stroke/></div>
                    <div className='body_filter__default body_filter__testnet'>Тестнеты</div>
                    <div className='body_filter_stroke'><Stroke/></div>
                    <div className='body_filter__default body_filter__retrodrop'>Ретродропы</div>
                </div>
                <div className="body_search">
                    <div className="body_search__text">Поиск</div>
                </div>
            </div>

            <div className="guide_cards">
                <GuideCard/>
                <GuideCard/>
                <GuideCard/>
            </div>
        </div>
    )
}

export default Body;
