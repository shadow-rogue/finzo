import React, {Fragment, useState} from "react";
import {Redirect } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth"

const Login = ({ login, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    email:"",
    password:"",
});

const {email, password} = formData;

const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value 
})

const onSubmit  = async e => {
  e.preventDefault();
  login(email,password);
};

//Redirect if logged in

if(isAuthenticated) {
  return <Redirect to="/dashboard" />
}

    return(
        <Fragment>
        <h1>Login:</h1>
          <form onSubmit ={e => onSubmit(e)}>
          
      <label className="control-label">E-mail</label>
      <div className="controls">
        <input type="text" name="email" onChange = { e=> onChange(e)} className="input-xlarge" />
        <p className="help-block">Please provide your E-mail</p>
      </div> 
    
      <label className="control-label">Password</label>
      <div className="controls">
        <input type="password" name="password" onChange = { e=> onChange(e)} className="input-xlarge" />
        <p className="help-block">Password should be at least 6 characters</p>
      </div> 
    
        <input type="submit" className="btn btn-success" value="Login"></input>
      
          </form>
        </Fragment>
    )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);