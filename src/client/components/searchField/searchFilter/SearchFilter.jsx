import React from 'react';
import { Button } from '../../button/Button';
import css from './SearchFilter.css';

export class SearchFilter extends React.Component {
    render() {
        return (
            <div className={css.filter}>
                <p>Search by</p>
                <Button title="title"/>
                <Button title="direction"/>
            </div>
        )
    }
}