import './Header.css'
import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

export default props =>
    <header className="header">
        <nav className="logo">
        <Link to="/" className="logo">
            <img src='https://bridge.ufsc.br/assets/bridge-446119d8d6d57cb3f7bb13771c5b8c4d26b9f13cebdf231b78e4e34e18e609fd.svg' 
                alt="logo"/>
        </Link>
        </nav>
        <nav className="menu">
            <NavItem href="/" classIcon="fa fa-home" title="Home"/>
            <NavItem href="/desafio" classIcon="fa fa-home" title="Desafio"/>
            <NavItem href="/autor" classIcon="fa fa-home" title="Autor"/>
        </nav>
    </header>