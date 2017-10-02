import React from 'react';
import { Logo } from '../logo/Logo';
import css from './Footer.css';

const Footer = () => {
    return (
        <div className={css.footer}>
            <Logo/>
        </div>
    )
}

export default Footer;