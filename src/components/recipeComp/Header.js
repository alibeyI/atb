import React from 'react'
import logo from '../svg/logoAtb.svg'
import num from '../svg/num.svg'
import './header.css'
const Header = () => {
    return (
        <div className="header" >
            <div className="logo" >
            <img src={logo} alt=""/>
            <img src={num} alt=""/>
            </div>
            <p>ONLAYN ÖDƏNİŞ SƏHİFƏSİ</p>
        </div>
    )
}

export default Header
