import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div className="container">
            <ul>
            <li><NavLink to = '/create' className = "right" >New Project</NavLink></li>
            <li><a onClick= {props.signOut} className = "right" >Log Out</a></li>
            <li><NavLink to = '/' className = "btn btn-floating-blue lighten-4" >
                {props.profile.initials}
            </NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(null , mapDispatchToProps )(SignedInLinks)