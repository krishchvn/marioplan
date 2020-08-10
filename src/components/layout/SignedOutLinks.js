import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div className="container">
            <ul>
            <li><NavLink to = '/signup' className = "right" >Sign up</NavLink></li>
            <li><NavLink to = '/signin' className = "right" >Login</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks;