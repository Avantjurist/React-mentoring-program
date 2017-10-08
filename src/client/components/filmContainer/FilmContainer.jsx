import React from 'react';
import Film from './filmItem/FilmItem';
import css from './FilmList.css';

export class ItemContainer extends React.Component {
    render() {
        return (
            <ul className={css.container}>
                {this.props.films.map(function(item) {
                    return <Film key={item.show_id} film={item}/>
                })}
            </ul>
        )
    }
}