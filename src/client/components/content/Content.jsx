import React from 'react';
import { ItemContainer } from '../filmList/FilmList';
import InfoBlock from '../infoBlock/InfoBlock';
import { connect } from 'react-redux';
// import css from './Content.css';
import FILMS from '../../../data/Data';

const mapStateToProps = (state) => {
    console.log("state", state)
    return {
        films: state.films
    };
};

const Content = () => {
    return (
        <div>
            <InfoBlock/>
            <ItemContainer films={this.props}/>
        </div>
    )
}

export default connect(mapStateToProps)(Content);