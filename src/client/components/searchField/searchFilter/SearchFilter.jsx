import React from 'react';
import { Button } from '../../button/Button';
import css from './SearchFilter.css';
import { connect } from 'react-redux';

class SearchFilter extends React.Component {
    onCockTitle = () => {
    console.log('here')
        this.props.setCockSize('title');
    }

    onCockDirections = () => {
        this.props.setCockSize('direction');
    }

    render() {
        return (
            <div className={css.filter}>
                <div className={css.searchBy}>
                    <p>Search by</p>
                    <Button type="button" onClick={this.onCockTitle}>title</Button>
                    <Button type="button" onClick={this.onCockDirections}>direction</Button>
                </div>
                <Button className={css.button} style={{width: 120, height: 30, backgroundColor: '#f55263'}} type="submit">search</Button>
            </div>
        )
    }
}

export default SearchFilter
