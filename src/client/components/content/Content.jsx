import React from 'react';
import { ItemContainer } from '../filmList/FilmList';
import InfoBlock from '../infoBlock/InfoBlock';
// import css from './Content.css';
import FILMS from '../../../data/Data';

const Content = () => {
    return (
        <div>
            <InfoBlock/>
            <ItemContainer films={FILMS}/>
        </div>
    )
}

export default Content;