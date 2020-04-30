import React from 'react'
import { Link } from "react-router-dom"
import './nav.scss'

const Nav = props => {
    return (
        <React.Fragment>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item"><img src="https://placehold.co/65x44" alt="" width="65" height="44" /></Link>
                    <button
                        onClick={() => { props.setToggled(!props.isToggled); }} type="button"
                        className={`navbar-burger burger ${props.isToggled ? 'is-active' : ''}`} aria-label="menu" aria-expanded={props.isToggled} data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${props.isToggled ? 'is-active' : ''}`}>
                    <div className="navbar-start">

                        <Link className="navbar-item is-active" to="/home">Home</Link>
                        <Link className="navbar-item" to="/contact" >Contact</Link>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            Social Media Icons
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Nav;