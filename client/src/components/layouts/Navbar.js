import React, {Fragment} from "react";
import {Link, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: {isAuthenticated, loading}, logout }) => {
    const authLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
            <a onClick={logout} to="#!" className="nav-link"><span>Logout</span></a>
            </li>
        </ul>
      );
    
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
        </ul>
      );

    return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor : "#e3f2fd"}} >
            <Link to ="/" className="navbar-brand">
              Instafiling</Link>
              { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  })
  
  export default connect(mapStateToProps, { logout })(Navbar);