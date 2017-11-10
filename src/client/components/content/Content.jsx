import React from 'react';
import { ItemContainer } from '../filmList/FilmList';
import InfoBlock from '../infoBlock/InfoBlock';
import { connect } from 'react-redux';
// import css from './Content.css';
import FILMS from '../../../data/Data';

const mapStateToProps = (state) => {
    return {
        films: state.films
    };
};

const Content = (props) => {
    console.log("props", props);
    return (
        <div>
            <InfoBlock/>
            <ItemContainer films={props.films}/>
        </div>
    )
}

export default connect(mapStateToProps)(Content);
