import React from "react";

const DirectorForm = (props) => {

    return(
        <div>

            <h1>Director {props.dName} </h1>
             <form>
  
              <label for="exampleFormControlInput1" class="form-label">Director Name</label>
              <input type="text"
                className="form-control"
                name="directorName"
                ></input>
  
                 <br/>
  
              <label for="exampleFormControlInput1" class="form-label">Photograph</label>
              <input type="file" 
              className="form-control"
              name="directorPhoto"
              accept="image/png, image/jpeg, .pdf"
             >
              </input>
  
              <br/>
  
              <label for="exampleFormControlInput1" class="form-label">Permanent Account No.(PAN)</label>
              <input type="file" 
              className="form-control"
              name="directorPan"
              accept="image/png, image/jpeg, .pdf"
              >
              </input>
  
              <br/>

              <label for="exampleFormControlInput1" class="form-label">Address proof(Adhaar Copy/Electricity Bill/Bank Statement/Driving Licenese) </label>
              <input type="file" 
              className="form-control"
              name="directorAdd"
              accept="image/png, image/jpeg, .pdf"
              >
              </input>

              <br/>

              <label for="exampleFormControlInput1" class="form-label">Passport (if available)</label>
              <input type="file" 
              className="form-control"
              name="directorPassport"
              accept="image/png, image/jpeg, .pdf"
              >
              </input>
  
              <br/>
  
              <label for="exampleFormControlInput1" class="form-label">Indian phone number:</label>
              <input type="text" 
              className="form-control"
              name="directorPhone"
              ></input>
              <label for="exampleFormControlInput1" class="form-label">Emai id</label>
              <input type="email" 
              className="form-control"
              name="directorEmail"
              ></input>
  
          </form>
        </div>
    )
}

export default DirectorForm;