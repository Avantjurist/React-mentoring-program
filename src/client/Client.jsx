import React from 'react';
import css from './client.css';
import Header from './components/header/Header';
// import Content from './components/content/Content';
import Footer from './components/footer/Footer';

const Client = () => {
    return (
        <div className={css.wrapper}>
            <Header/>
            {this.props.children}
            <Footer/>
        </div>
    )
}

export { Client };