import React from 'react';
import ResultCount from './components/resultCount/ResultCount';
import ResultFilter  from './components/resultFilter/ResultFilter';
import css from './InfoBlock.css';

const InfoBlock = (props) => {
  console.log("er", props)
    return (
        <div className={css.info}>
            <ResultCount count={props.count}/>
            <ResultFilter/>
        </div>
    )
}

export default InfoBlock;
