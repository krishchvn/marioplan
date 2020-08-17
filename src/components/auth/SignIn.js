import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state= {
        email: '',
        password : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.signIn(this.state);
    }
    render() { 
        const { authError, auth } = this.props;
        if( auth.uid) return <Redirect to ='/' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="grey lighten-5">
                    <h5 className="grey-text text-darken-3 auto">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" onChange= {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Log In</button>
                    </div>
                    <div className="red-text">
                        {authError ? <h6>Either the Email or Password or Both are wrong! {authError}</h6> : null}
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
} 

export default connect(mapStateToProps , mapDispatchToProps)(SignIn)
