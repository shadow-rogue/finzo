import React, { useState } from "react";
import DirectorForm from "./DirectorForm";

const CCformfiles = () => {

  const [formData, setFormData] = useState({
    incCerti: null,
    panComp: null,
    moaComp: null,
    gstid: "",
    gstpass: "",
    directorN: 0
  });

  const {incCerti, panComp, moaComp, gstid, gstpass, directorN} = formData;

  const [directors, setDirectors] = useState([]);

  // function createDirForm(dirNo)
  // {
  //   console.log("entered");
  //   return (
  //     <div>
  //     <DirectorForm dName= {dirNo} />
  //     </div>
  //   )
  // }

  const onChange = e => { 
    setFormData({
    ...formData, [e.target.name]: e.target.value
  })
  }

  var temp = [];
  function onset(event) 
  {
    event.preventDefault();
    for(var i=0;i<directorN;i++)
    {
      temp[i]=i+1;
      console.log(temp[i]);
    }
    setDirectors(temp);
  }

  

    return (
        <div>
            <h1> Documents Upload </h1>

            <form >
  
              <label for="exampleFormControlInput1" class="form-label">Certificate of Incorporation (CIN)</label>
              <input type="file"
                className="form-control"
                name="incCerti"
                value={incCerti}
                onChange = {(e) => onChange(e)}
                accept="image/png, image/jpeg, .pdf"
                ></input>
  
                 <br/>
  
              <label for="exampleFormControlInput1" class="form-label">PAN of the Company</label>
              <input type="file" 
              className="form-control"
              name="panComp"
              value={panComp}
              onChange = {(e) => onChange(e)}
              accept="image/png, image/jpeg, .pdf"
             >
              </input>
  
              <br/>
  
              <label for="exampleFormControlInput1" class="form-label">MOA of the company</label>
              <input type="file" 
              className="form-control"
              name="moaComp"
              value={moaComp}
              onChange = {(e) => onChange(e)}
              accept="image/png, image/jpeg, .pdf"
              >
              </input>
  
              <br/>

              <p>GST login credentials, if available:</p>
  
              <label for="exampleFormControlInput1" class="form-label">Login id:</label>
              <input type="text" 
              className="form-control"
              name="gstid"
              value={gstid}
              onChange = {(e) => onChange(e)}
              ></input>
              <label for="exampleFormControlInput1" class="form-label">Password:</label>
              <input type="text" 
              className="form-control"
              name="gstpass"
              value={gstpass}
              onChange = {(e) => onChange(e)}
              ></input>

              <br/>   

              <label for="exampleFormControlInput1" class="form-label">No.of Directors:</label>
              <input type="text" 
              className="form-control"
              name="directorN"
              value={directorN}
              onChange = {(e) => onChange(e)}
              ></input>

              <button className="btn btn-primary" onClick={onset}>Set</button>
              
              
              {
               directors.map( (dirNo, index) =>{
                console.log("entered");
                return (
                  <div>
                    <DirectorForm dName={dirNo} />
                  </div>
                );
              })
              }
              
              <br/>

              <button type="submit" className="submit-button">Submit</button> 
  
          </form>
         
        </div>
    );
}

export default CCformfiles;