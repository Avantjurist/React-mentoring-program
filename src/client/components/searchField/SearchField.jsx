import React from 'react';
import { Button } from '../button/Button';
import { SearchFilter } from './searchFilter/SearchFilter';
import css from './SearchField.css'

export class SearchField extends React.Component {

    changeState = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className={css.title}>Find your movie</div>
                <input className={css.search} type="text" value="Quentin Tarantino" onChange={this.changeState}/>
                <SearchFilter/>
                <Button/>
            </div>

        )
    }
}