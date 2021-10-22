import React from 'react'
import icon from './icon.png'

const Header = () => {
    return (
        <header className="d-flex justify-space-between align-y-center border-all padding">
            <img src={icon} alt="icon" style={{width: 50}}/>
            <p className="header-title">
                <span className="bold">COVID-19</span>:
                Live Situational Analysis Dashboard of Sri Lanka 
            </p>

            <div></div>
        </header>
    )
}

export default Header;