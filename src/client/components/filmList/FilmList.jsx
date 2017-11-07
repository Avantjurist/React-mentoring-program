import React from 'react';
import Film from './filmItem/FilmItem';
import css from './FilmList.css';

export class ItemContainer extends React.Component {

    render() {
        console.log(this.props)
        return (
            <ul className={css.container}>
                {
                    this.props.films &&
                    this.props.films.map(function(item) {
                    return <Film key={item.id} film={item}/>
                })}
            </ul>
        )
    }
}