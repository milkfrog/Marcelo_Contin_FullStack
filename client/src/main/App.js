import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/template/Header'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
