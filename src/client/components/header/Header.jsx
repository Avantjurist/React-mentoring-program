import React from 'react';
import { Logo } from '../logo/Logo';
import SearchField from '../searchField/SearchField';
import css from './Header.css';
console.log(SearchField)

const Header = () => {
    return (
        <div className={css.header}>
            <Logo/>
            <SearchField/>
        </div>
    )
}

export default Header