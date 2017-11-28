import React from 'react';
import css from './FilmPage.css';
import FilmHeader from '../components/header/filmHeader/FilmHeader';
import FilmContent from '../components/content/filmContent/FilmContent';
import Footer from '../components/footer/Footer';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  for(var i = 0; i < state.films.length; i++){
    var film = state.films[0];
  }
  return {film: film}
}

const FilmPage = (props) => {
    return (
        <div className={css.wrapper}>
            <FilmHeader film={props.film}/>
            <FilmContent/>
            <Footer/>
        </div>
    )
}

export default connect(mapStateToProps)(FilmPage);
