import React from 'react';
import { Button } from '../../button/Button';
import css from './SearchFilter.css';
import { connect } from 'react-redux';

class SearchFilter extends React.Component {

    searchByTitle = () => {
        this.props.searchBy('title');
    }

    searchByDirector = () => {
        this.props.searchBy('director');
    }

    render() {
        return (
            <div className={css.filter}>
                <div className={css.searchBy}>
                    <p>Search by</p>
                    <Button type="button" onClick={this.searchByTitle}>title</Button>
                    <Button type="button" onClick={this.searchByDirector}>direction</Button>
                </div>
                <Button className={css.button} style={{width: 120, height: 30, backgroundColor: '#f55263'}} type="submit">search</Button>
            </div>
        )
    }
}

export default SearchFilter
