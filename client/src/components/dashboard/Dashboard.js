import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Dashboard = (props) => {
    return(
        <div>
         <h1>Services: </h1>
           <Link to="/companyclosure" >Company Closure Form</Link>
        </div>
    )
};

Dashboard.propTypes = {};

export default Dashboard;
