import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import { FilmPage } from './client/filmPage/FilmPage';
import { Client } from './client/searchFilmPage/Client';
import Content from './client/components/content/Content';

ReactDom.render((
    <Router>
        <App>
            <Switch>
                <Route path="/film/:param" component={FilmPage} />
                <Route path="/">
                    <Client>
                        <Route path="/search/:query" component={ Content } />
                    </Client>
                </Route>
            </Switch>
        </App>
    </Router>
), document.getElementById('app'));