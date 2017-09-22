import React from 'react';
import { Logo } from './logo/Logo';
import { SearchField } from './searchField/SearchField';
import css from './Header.css';

export class Header extends React.Component {
    render() {
        return (
            <div className={css.header}>
                <Logo/>
                <SearchField/>
            </div>
        )
    }
}