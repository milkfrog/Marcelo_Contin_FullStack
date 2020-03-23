import './Header.css'
import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default props =>
    <header className="header">
        <nav className="logo">
        <Link to="/" className="logo">
            <img src='https://bridge.ufsc.br/assets/bridge-446119d8d6d57cb3f7bb13771c5b8c4d26b9f13cebdf231b78e4e34e18e609fd.svg' 
                alt="logo"/>
        </Link>
        </nav>
        <nav className="menu">
            <div className="menuGrande">
                <NavItem href="/" classIcon="fas fa-home" title="Home"/>
                <NavItem href="/desafio" classIcon="fas fa-laptop-code" title="Desafio"/>
                <NavItem href="/autor" classIcon="fas fa-at" title="Autor"/>
            </div>
            <div className="dropdown">
                <DropdownButton id="dropdown-basic-button" title="">
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                    <Dropdown.Item href="/desafio">Desafio</Dropdown.Item>
                    <Dropdown.Item href="/autor">Autor</Dropdown.Item>
                </DropdownButton>
            </div>
        </nav>
    </header>