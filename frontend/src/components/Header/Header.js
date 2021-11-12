import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import './Header.css';
import Nav from '../Nav/Nav';

const Header = ({ searchChange }) => {
    return (
        <div className="w-100">
            <header className="black-80 tc pv2 avenir">
                <div className="container">
                    <Link to="/">
                        <img className="pr3 logo pointer" alt="logo" src={Logo} />
                    </Link>
                    <div>
                        <input
                            className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-50-m w-80-l br2-ns br--left-ns"
                            placeholder="Busca un producto"
                            type="text"
                            name="search"
                            id="search"
                            onChange={searchChange}
                        />
                        <input
                            className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                            type="submit"
                            value="Buscar"
                        />
                    </div>
                </div>
                <Nav />
            </header>
        </div>
    )
}

export default Header
