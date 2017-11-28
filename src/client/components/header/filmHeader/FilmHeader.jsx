import React from 'react';
import { Logo } from '../../logo/Logo';
import css from './FilmHeader.css';
import Film from '../../filmList/filmItem/FilmItem'

const FilmHeader = (props) => {
    return (
        <div className={css.header}>
            <Logo/>
            <Film film={props.film }/>
        </div>
    )
}

export default FilmHeader
