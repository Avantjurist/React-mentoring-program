import React, {Component} from 'react';
import { ItemContainer } from '../filmList/FilmList';
import InfoBlock from '../infoBlock/InfoBlock';
import { connect } from 'react-redux';
// import css from './Content.css';

const mapStateToProps = (state) => {
    if(state.filter == "rating") {
        return {
            films: filterFilmsByRating(state.films)
        }
    }
    if(state.filter == "date") {
        return {
            films: filterFilmByDate(state.films)
        };
    }
    return {
        films: state.films
    }
};

const filterFilmsByRating = (films) => {
    return films.slice().sort((film1,film2) => film2.vote_average - film1.vote_average)
}

const filterFilmByDate = (films) => {
    return films.slice().sort((film1,film2) => Date.parse(film2.release_date) - Date.parse(film1.release_date))
}

class Content extends Component {
  render() {

    console.log("length", this.props.films);
    return (
        <div>
            <InfoBlock count={this.props.films.length}/>
            <ItemContainer films={this.props.films}/>
        </div>
    )
  }

}

export default connect(mapStateToProps)(Content);
