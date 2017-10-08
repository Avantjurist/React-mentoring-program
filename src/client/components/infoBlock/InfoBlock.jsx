import React from 'react';
import ResultCount from './components/resultCount/ResultCount';
import ResultFilter  from './components/resultFilter/ResultFilter';
import css from './InfoBlock.css';

const InfoBlock = () => {
    return (
        <div className={css.info}>
            <ResultCount/>
            <ResultFilter/>
        </div>
    )
}

export default InfoBlock;