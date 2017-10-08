import React from 'react';
import { Logo } from '../../logo/Logo';
import css from './FilmHeader.css';
import Film from '../../filmList/filmItem/FilmItem'

const filmExample = {
    unit: 84,
    show_id: 60032563,
    show_title: "Kill Bill: Vol. 2",
    release_year: "2004",
    rating: "3.8",
    category: "Action & Adventure",
    show_cast: "Uma Thurman, David Carradine, Michael Madsen, Daryl Hannah, Gordon Liu, Michael Parks, Perla Haney-Jardine, Helen Kim, Claire Smithies, Clark Middleton",
    director: "Quentin Tarantino",
    summary: "The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill's house, she's in for a surprise.",
    poster: "http://netflixroulette.net/api/posters/60032563.jpg",
    mediatype: 0,
    runtime: "137 min"
}

const FilmHeader = () => {
    return (
        <div className={css.header}>
            <Logo/>
            <Film film={filmExample}/>
        </div>
    )
}

export default FilmHeader