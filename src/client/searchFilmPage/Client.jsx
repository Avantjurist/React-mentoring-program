import React from 'react';
import css from './client.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export class Client extends React.Component {
    render() {
        return (
            <div className={css.wrapper}>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}