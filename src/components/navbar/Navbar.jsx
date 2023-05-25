import React from 'react'
import "./navbar.css"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import { faGlobe, faGear } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navWrapper">
          <div className="navLeft">
            <span className='logo'> MyAdmin </span>
          </div>
          <div className="navRight">
            <div className="iconContainer">
            <FontAwesomeIcon icon={faBell} className='icn' />
            <span className="iconBadge">2</span>
            </div>
            <div className="iconContainer">
            <FontAwesomeIcon icon={faGlobe} className='icn' />
            <span className="iconBadge">2</span>
            </div>
            <div className="iconContainer">
            <FontAwesomeIcon icon={faGear} className='icn' />
            </div>
            <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="Avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}
