import React from 'react';
import { ItemContainer } from './filmContainer/FilmContainer';
import { InfoBlock } from './infoBlock/InfoBlock'

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