import React from 'react';
import { ItemContainer } from '../../filmList/FilmList';
import FILMS from '../../../../data/Data';
import ResultCount from "../../infoBlock/components/resultCount/ResultCount";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        films: state.films
    };
};

const Content = (props) => {
    return (
        <div>
            <ResultCount count={props.films.length}/>
            <ItemContainer films={props.films}/>
        </div>
    )
}

export default connect(mapStateToProps)(Content)
