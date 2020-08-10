import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div className="container">
            <ul>
            <li><NavLink to = '/create' className = "right" >New Project</NavLink></li>
            <li><NavLink to = '/' className = "right" >Log Out</NavLink></li>
            <li><NavLink to = '/' className = "btn btn-floating-blue lighten-4" >ZC</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks;