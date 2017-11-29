import React from 'react';
import css from './Client.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
console.log(Header, Footer)
export class Client extends React.Component {
    render() {
        return (
            <div className={css.wrapper}>
                <div className="content">
                    <Header/>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}
