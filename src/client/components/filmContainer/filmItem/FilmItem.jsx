import React from 'react';

export class Film extends React.Component {
    render() {
        return (
            <li>
                <div className="itemTitle">{this.props.film.name}</div>
            </li>
        )
    }
}