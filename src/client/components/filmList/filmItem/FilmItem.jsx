import React from 'react';
import css from './Filmitem.css';
import { Link } from 'react-router-dom';

const Film = ({film}) => {
    return (
        <div className={css.film}>
            <Link to={`/film/${film.show_title}`}><img className="movie__image" src={film.poster} alt={name}/></Link>
            <div className={css.title}>{film.show_title}</div>
            <div className={css.genre}>{film.category}</div>
            <div className={css.release}>{film.release_year}</div>
        </div>
    )
}

export default Film;