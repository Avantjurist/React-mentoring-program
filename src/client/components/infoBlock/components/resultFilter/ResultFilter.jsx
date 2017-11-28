import React from 'react';
import css from './ResultFilter.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { filterBy } from './../../../../../actions/index'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({filterBy}, dispatch)
}

class ResultFilter extends React.Component {
    filterByDate = () => {
        this.props.filterBy('date')
    }

    filterByRating = () => {
        this.props.filterBy("rating")
    }
    render() {
        return (
            <div className={css.filter}>
                <div>Sort by</div>
                <div onClick={this.filterByDate}>release date</div>
                <div onClick={this.filterByRating}>rating</div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ResultFilter)