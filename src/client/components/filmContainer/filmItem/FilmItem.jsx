import React from 'react';
import css from './Filmitem.css';

export class Film extends React.Component {
    render() {
        return (
            <li className={css.film}>
                <img className={css.img} src={this.props.film.poster} alt={this.props.film.name}/>
                <div className={css.title}>{this.props.film.show_title}</div>
                <div className={css.genre}>{this.props.film.category}</div>
                <div className={css.release}>{this.props.film.release_year}</div>
            </li>
        )
    }
}