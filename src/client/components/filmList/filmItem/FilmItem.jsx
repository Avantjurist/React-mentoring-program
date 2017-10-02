import React from 'react';
import css from './Filmitem.css';

const Film = ({film}) => {
    return (
        <div className={css.film}>
            <img className={css.img} src={film.poster} alt={name}/>
            <div className={css.title}>{film.show_title}</div>
            <div className={css.genre}>{film.category}</div>
            <div className={css.release}>{film.release_year}</div>
        </div>
    )
}

export { Film };