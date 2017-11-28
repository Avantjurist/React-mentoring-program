import React from 'react';
import { ItemContainer } from '../filmList/FilmList';
import InfoBlock from '../infoBlock/InfoBlock';
import { connect } from 'react-redux';
// import css from './Content.css';

const mapStateToProps = (state) => {
    if(state.filter == "rating") {
        console.log("xxx",filterFilmsByRating(state.films));
        return {
            films: filterFilmsByRating(state.films)
        };
    }
    if(state.filter == "date") {
        console.log("xxx",filterFilmByDate(state.films));
        return {
            films: filterFilmByDate(state.films)
        };
    }
    return {
        films: state.films
    }
};

const filterFilmsByRating = (films) => {
    return films.sort((film1,film2) => film2.vote_average - film1.vote_average)
}

const filterFilmByDate = (films) => {
    return films.sort((film1,film2) => Date.parse(film2.release_date) - Date.parse(film1.release_date))
}

const Content = (props) => {
    console.log("length", props.films.length);
    return (
        <div>
            <InfoBlock count={props.films.length}/>
            <ItemContainer films={props.films}/>
        </div>
    )
}

export default connect(mapStateToProps)(Content);
