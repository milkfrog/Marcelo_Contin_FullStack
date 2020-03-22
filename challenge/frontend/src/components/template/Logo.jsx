import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src='https://bridge.ufsc.br/assets/bridge-446119d8d6d57cb3f7bb13771c5b8c4d26b9f13cebdf231b78e4e34e18e609fd.svg' 
                alt="logo"/>
        </Link>
    </aside>