import React from 'react';

export class Client extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export class Header extends React.Component {
    render() {
        return (
            <div>
                <a>netflixroulette</a>
                <SearchField/>
            </div>
        )
    }
}

export class SearchField extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value="Quentin Tarantino"/>
                <SearchField/>
                <SearchButton/>
            </div>

        )
    }
}

export class SearchFilter extends React.Component {
    render() {
        return (
            <div>
                <p>Search by</p>
                <button>title</button>
                <button>direction</button>
            </div>
        )
    }
}

export class SearchButton extends React.Component {
    render() {
        return (
            <button>Search</button>
        )
    }
}

export class Content extends React.Component {
    render() {
        return (
            <div>
                <InfoBlock/>
            </div>
        )
    }
}

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

const ResultCount = () => {
    <p>7 movie found</p>
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

var films = [
    {name: "Kill Bill: vol 2", genre: "action & adventure", releaseDate: 2004},
    {name: "Kill Bill: vol 1", genre: "action & adventure", releaseDate: 2003},
    {name: "Pulp Fiction", genre: "Oscar-winning Movie", releaseDate: 1994},
    {name: "Jacky Brown", genre: "Dramas", releaseDate: 1997},
    {name: "Reservoir Dogs", genre: "Independent Movie", releaseDate: 1992},
    {name: "Four Rooms", genre: "Commedies", releaseDate: 1995},
    {name: "Django Unchaiden", genre: "Dramas", releaseDate: 2012}
]

export class ItemContainer extends React.Component {


    return () {
        this.props.forEach()
    }
}

export class Film extends React.Component {
    render() {
        return (
            <div>
                <img className="itemImage"/>
                <div className="itemTitle">props.itemTitle</div>
            </div>
        )
    }
}

