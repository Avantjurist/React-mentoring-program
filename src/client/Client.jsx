import React from 'react';
import css from './client.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer }  from './components/Footer';

export class Client extends React.Component {
    render() {
        return (
            <div className={css.wrapper}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

