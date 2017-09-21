import React from 'react';
import { Film } from './filmItem/FilmItem'

export class ItemContainer extends React.Component {
    render() {
        return (
            <ul>
                {this.props.films.map(function(item) {
                    return <Film key={item.id} film={item}/>
                })}
            </ul>
        )
    }
}