import React from 'react';
import { ItemContainer } from '../filmList/FilmList';
import InfoBlock from '../infoBlock/InfoBlock';
import { connect } from 'react-redux';
// import css from './Content.css';

const mapStateToProps = (state) => {
    return {
        films: state.films
    };
};

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
