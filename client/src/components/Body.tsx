import React from 'react'
import "./styles.css";
import Stroke from '@/images/Stroke';

const Body = () => {
    return (
        <div className='body'>
            <div className='body_filter'>
                <div className='body_filter__default body_filter__all'>Все</div>
                <div className='body_filter_stroke'><Stroke/></div>
                <div className='body_filter__default body_filter__testnet'>Тестнеты</div>
                <div className='body_filter_stroke'><Stroke/></div>
                <div className='body_filter__default body_filter__retrodrop'>Ретродропы</div>
            </div>
            <div className="body_search"></div>
        </div>
    )
}

export default Body;
