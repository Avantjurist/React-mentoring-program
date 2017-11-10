import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchFilter from './searchFilter/SearchFilter';
import css from './SearchField.css';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { loadFilm, setCockSize } from '../../../actions/index'

class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }



    handleSubmit = (event) => {
        this.props.loadFilm(this.state.value);
        const { history : myHistory } = this.props
        myHistory.push(`/search/${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className={css.title}>Find your movie</div>
                <form onSubmit={this.handleSubmit}>
                    <input className={css.search} type="text" value={this.state.value} onChange={this.handleChange}/>
                    <SearchFilter setCockSize={this.props.setCockSize}/>
                </form>
            </div>

        )
    }
}

export default withRouter(connect(null,dispatch => bindActionCreators({loadFilm, setCockSize}, dispatch))(SearchField));
