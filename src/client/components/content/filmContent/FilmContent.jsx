import React from 'react';
import { ItemContainer } from '../../filmList/FilmList';
import FILMS from '../../../../data/Data';
import ResultCount from "../../infoBlock/components/resultCount/ResultCount";

const Content = () => {
    return (
        <div>
            <ResultCount/>
            <ItemContainer films={FILMS}/>
        </div>
    )
}

export default Content;