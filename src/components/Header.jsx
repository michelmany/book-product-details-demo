import React from 'react';
import Logo from './Logo';

const Header = () => {
    return (
        <header className="header">
            <div className="pattern-strip"></div>
            <div className="header__container">
                <div className="header__logo">
                    <Logo/>
                </div>
                <nav className="header__nav" aria-label="Main navigation">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Home</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Books</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Authors</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
