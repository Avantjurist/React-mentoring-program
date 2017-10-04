import React from 'react';
import css from './ResultFilter.css';

export default class ResultFilter extends React.Component {
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