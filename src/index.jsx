import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './App';
import FilmPage from './client/filmPage/FilmPage';
import { Client } from './client/searchFilmPage/Client';
import Content from './client/components/content/Content';
import css from './index.css';
import store from './store';

ReactDom.render((
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/film/:param" component={ FilmPage } />
                    <Route path="/">
                        <Client>
                            <Route path="/search/:query" component={ Content } />
                        </Client>
                    </Route>
                </Switch>
            </App>
        </Router>
    </Provider>
), document.getElementById('app'));
