import React from 'react';
import css from './FilmPage.css';
import FilmHeader from '../components/header/filmHeader/FilmHeader';
import FilmContent from '../components/content/filmContent/FilmContent';
import Footer from '../components/footer/Footer';

const FilmPage = () => {
    return (
        <div className={css.wrapper}>
            <FilmHeader/>
            <FilmContent/>
            <Footer/>
        </div>
    )
}

export { FilmPage };