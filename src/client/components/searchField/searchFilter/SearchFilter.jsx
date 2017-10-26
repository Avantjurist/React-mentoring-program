import React from 'react';
import { Button } from '../../button/Button';
import css from './SearchFilter.css';

export class SearchFilter extends React.Component {
    render() {
        return (
            <div className={css.filter}>
                <div className={css.searchBy}>
                    <p>Search by</p>
                    <Button type="button">title</Button>
                    <Button type="button">direction</Button>
                </div>
                <Button className={css.button} style={{width: 120, height: 30, backgroundColor: '#f55263'}} type="submit">search</Button>
            </div>
        )
    }
}