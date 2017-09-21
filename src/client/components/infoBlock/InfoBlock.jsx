import React from 'react';

export class InfoBlock extends React.Component {
    render() {
        return (
            <div>
                <ResultCount/>
                <ResultFilter/>
            </div>
        )
    }
}

export class ResultCount extends React.Component {
    render() {
        return (
            <p>7 movie found</p>
        )
    }
}

export class ResultFilter extends React.Component {
    render() {
        return (
            <div>
                <p>Sort by</p>
                <a>release date</a>
                <a>rating</a>
            </div>
        )
    }
}