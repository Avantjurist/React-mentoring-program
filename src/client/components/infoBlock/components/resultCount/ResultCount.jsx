import React from 'react';
import css from './ResultCount.css';

export default class ResultCount extends React.Component {
    render() {
      console.log("myprops",this.props)
        return (
            <p className={css.result}>{this.props.count} movie found</p>
        )
    }
}
