import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchFilter from './searchFilter/SearchFilter';
import css from './SearchField.css';
import { connect } from 'react-redux';
import { loadFilm } from '../../../actions/index'

const mapStateToProps = (state) => {
    console.log("aaa",state)
    return {
        films: state
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("bbb", dispatch)
    return {
        loadFilm: (query) => dispatch(loadFilm(query))
    }
}

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
                    <SearchFilter/>
                </form>
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchField));