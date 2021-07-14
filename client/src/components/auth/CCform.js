import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { submitInfo } from "../../actions/ccform";
import PropTypes from "prop-types";

function createOption(year) {
    return ( <option value="year">{year}</option>)
  }
  
  // function createInput(label){
  //   return ( <div>
  //   <label>{label} : </label><input name = {turnover} type="text"></input>
  //   </div>)
  // }
  
  var currentYear = (new Date()).getFullYear();
  

  function getYear(inc) 
  {
    var date= new Date(inc);
    var d= date.getFullYear();;
    console.log(d);
    return d;
  } 
  

  //Component starts from here
  const CCform = ({ submitInfo }) => {
    
    const [formData, setFormData] = useState({
      companyName: "",
      incDate: "",
      pendingDate: "",
      turnover: [],
      status: "",
      gstn: ""
    });

    const [incYear, setIncYear] = useState("");

    const [years, setYears] = useState([]);
  
    const {companyName, incDate, pendingDate, turnover, status, gstn} = formData;
  
    const onChange = e => { 
      setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  
  }
  
  var dummy = [];

  function dateSubmitted() {
    setIncYear(incDate.slice(0,4));

    var startyr = parseInt(incDate.slice(0,4));

  for(var i=startyr;i<=currentYear;i++)
  {
    dummy.push(i);
  }

  setYears(dummy);
  }

  console.log(years);
  console.log(incYear);
  
      var x = currentYear-parseInt(incDate);
      // turnover = [x];
  
     
      const onSubmit = async e => {
        e.preventDefault();
        submitInfo( {companyName, incDate, pendingDate, turnover, status, gstn} );

        }
  
    return ( 
      <div>
        
        <h1>Basic Information</h1>
          
          <form onSubmit = { e=> onSubmit(e)}>
  
              <label for="exampleFormControlInput1" class="form-label">Company Name:</label>
              <input type="text"
                className="form-control"
                name="companyName"
                 value={companyName}
                 onChange={(e) => {
                     onChange(e)
                 }}></input>
  
                 <br/>
  
              <label for="exampleFormControlInput1" class="form-label">Incorporation Date:</label>
              <input type="date" 
              className="form-control"
              name="incDate"
              value={incDate}
              onChange={ (e) => {
                     onChange(e)
              }}>
              </input>

              <button className="btn btn-primary" onClick ={dateSubmitted}>Set</button>
  
              <br/>
  
              <label for="exampleFormControlInput1" class="form-label">Filing Pending since:</label>
              <input type="date" 
              className="form-control"
              name="pendingDate"
              value={pendingDate}
              onChange={(e) => {
                     onChange(e)
              }}>
              </input>
  
              <br/>
  
              <p>turnover: </p>
              {
                years.map( (year ,index) => {
                  return ( <div>
                  <label>{year} :</label>
                   <input name = {turnover[index]} value = {turnover[index]} type="text"></input>
                   </div>)
              })
              }
  
              <br/>
  
              <p>Whether GST registration taken? </p>
              <input type="radio" name="status" value={1}
              onChange ={ (e)=> {
                  onChange(e)
              }}></input>
              <label for="Yes">Yes</label><br/>
              <input type="radio" name="status" value={0}
              onChange ={ (e)=> {
                  onChange(e)
              }}></input>
              <label for="No">No</label><br/>
  
              <label for="exampleFormControlInput1" class="form-label">Provide GSTN , If yes:</label>
              <input type="text" 
              className="form-control"
              name="gstn"
              value={gstn}
              onChange={ (e) => {
                     onChange(e)
              }}></input>
  
              <button type="submit" className="submit-button">Submit</button> 
  
          </form>
      </div>
    );
  }

CCform.propTypes = {
  submitInfo: PropTypes.func.isRequired
}

export default connect(null, { submitInfo })(CCform);