import React from 'react';
import { SearchFilter } from './searchFilter/SearchFilter';
import css from './SearchField.css'

export class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log("value: " + this.state.value);
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