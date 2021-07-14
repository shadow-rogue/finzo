import React, {Fragment, useState} from "react";
import { Redirect }  from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

const Register = ( { setAlert, register, isAuthenticated}) => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password2:""
});

const {name, email, password, password2} = formData;

const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value 
})

const onSubmit = async e => {
    e.preventDefault();
    if(password!==password2)
        setAlert("Passwords dont match", "danger");
    else {
      register( {name, email, password});
    }
}

//Redirect if registration successfull
if(isAuthenticated) {
  return <Redirect to="/dashboard" />
}
    
    return(
        <Fragment>
        <h1>Register:</h1>
          <form onSubmit = {e => onSubmit(e)}> 
          
      <label className="control-label">Username</label>
      <div className="controls">
        <input type="text" name="name" value={name} onChange = {e => onChange(e)} className="input-xlarge" />
        <p className="help-block">Username can contain any letters or numbers, without spaces</p>
      </div>
 
    
      <label className="control-label">E-mail</label>
      <div className="controls">
        <input type="text" name="email" value={email} onChange = {e => onChange(e)} className="input-xlarge" />
        <p className="help-block">Please provide your E-mail</p>
      </div> 
    
      <label className="control-label">Password</label>
      <div className="controls">
        <input type="password" name="password" value={password} onChange = {e => onChange(e)} className="input-xlarge" />
        <p className="help-block">Password should be at least 6 characters</p>
      </div> 
    
     
      <label className="control-label" >Password (Confirm)</label>
      <div className="controls">
        <input type="password" name="password2" value={password2} onChange = {e => onChange(e)} className="input-xlarge" />
        <p className="help-block">Please confirm password</p>
      </div> 
    
        <input type="submit" className="btn btn-success" value="Register"></input>
      
          </form>
        </Fragment>
    )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);