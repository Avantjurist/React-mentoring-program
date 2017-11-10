import React from 'react';
import css from './Filmitem.css';
import { Link } from 'react-router-dom';

const Film = ({film}) => {
    return (
        <div className={css.film}>
            <Link to={`/film/${film.title}`}>
                <img className={css.img} src={'https://image.tmdb.org/t/p/w500/' + film.poster_path} alt={film.title}/>
            </Link>
            <div className={css.title}>{film.title}</div>
            {/*<div className={css.genre}>{film.category}</div>*/}
            <div className={css.release}>{film.release_date}</div>
        </div>
    )
}

export default Film;