import './Header.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <nav className="menu">
            <NavItem href="/" classIcon="fa fa-home" title="Home"/>
            <NavItem href="/sobre" classIcon="fa fa-home" title="Sobre"/>
        </nav>
    </header>