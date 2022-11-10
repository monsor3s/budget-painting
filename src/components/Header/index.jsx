import React from 'react'
import LogoHeader from "../../img/logo-app.png"
import WaveHeader from "../../img/wave.png"

function Header() {
  return (
    <header id="header">
        <div className="header-container">
            <img className="logo-header" src={LogoHeader} alt="logo" />
            <img className="wave-header" src={WaveHeader} alt="wave" />
        </div>
    </header>
  )
}

export default Header