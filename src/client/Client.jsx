import React from 'react';
import css from './client.css';
console.log(css);
export class Client extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export class Link extends React.Component {
    render() {
        return (
            <a className={css.netflixRoulette}>netflixroulette</a>
        )
    }
}

export class Header extends React.Component {
    render() {
        return (
            <div>
                <Link/>
                <SearchField/>
            </div>
        )
    }
}

export class SearchField extends React.Component {

    changeState = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value="Quentin Tarantino" onChange={this.changeState}/>
                <SearchFilter/>
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

var FILMS = [
    {id: "1", name: "Kill Bill: vol 2", genre: "action & adventure", releaseDate: 2004},
    {id: "2", name: "Kill Bill: vol 1", genre: "action & adventure", releaseDate: 2003},
    {id: "3", name: "Pulp Fiction", genre: "Oscar-winning Movie", releaseDate: 1994},
    {id: "4", name: "Jacky Brown", genre: "Dramas", releaseDate: 1997},
    {id: "5", name: "Reservoir Dogs", genre: "Independent Movie", releaseDate: 1992},
    {id: "6", name: "Four Rooms", genre: "Commedies", releaseDate: 1995},
    {id: "7", name: "Django Unchaiden", genre: "Dramas", releaseDate: 2012}
]

export class Content extends React.Component {
    render() {
        return (
            <div>
                <InfoBlock/>
                <ItemContainer films={FILMS}/>
            </div>
        )
    }
}

export class ItemContainer extends React.Component {
    render() {
        return (
            <ul>
                {this.props.films.map(function(item) {
                    return <Film key={item.id} film={item}/>
                })}
            </ul>
        )
    }
}

export class Film extends React.Component {
    render() {
        return (
            <li>
                <div className="itemTitle">{this.props.film.name}</div>
            </li>
        )
    }
}

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <a href="#">netflixroulette</a>
            </div>
        )
    }
}

