import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className = "nav-wrapper grey darken-2">
            <div className="container ">
                <div className="left">
                    <Link to = '/' className = "brand-logo" >MarioPlan</Link>
                </div>
                <div className="container right">
                    <SignedOutLinks />
                    <SignedInLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;