import React from 'react';
import css from './Button.css'

export class Button extends React.Component {
    render() {
        return (
            <buton className={css.button} style={this.props.style}>{this.props.title}</buton>
        )
    }
}