import React from 'react';
import css from './InfoBlock.css';

export class InfoBlock extends React.Component {
    render() {
        return (
            <div className={css.info}>
                <ResultCount/>
                <ResultFilter/>
            </div>
        )
    }
}

export class ResultCount extends React.Component {
    render() {
        return (
            <p className={css.result}>7 movie found</p>
        )
    }
}

export class ResultFilter extends React.Component {
    render() {
        return (
            <div className={css.filter}>
                <p>Sort by</p>
                <a>release date</a>
                <a>rating</a>
            </div>
        )
    }
}