import React from 'react';
import { Logo } from './logo/Logo';
import css from './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className={css.footer}>
                <Logo/>
            </div>
        )
    }
}