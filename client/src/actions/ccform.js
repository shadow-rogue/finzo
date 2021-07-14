import axios from "axios";
import { setAlert } from "./alert";

import {
    SAVED_INFO,
    INFO_SAVE_FAIL,
    GET_INFO,
    INFO_ERROR,
} from "./types";


//After basic info has been submitted by user

//submit basic info 

export const submitInfo = ({companyName,
    incDate,
    pendingDate,
    turnover,
    status,
    gstn }) => async dispatch => {

        const config = {
            headers: {
                "Content-type" : "application/json" 
            }
        }

        const newInfo = {
            companyName,
            incDate,
            pendingDate,
            turnover,
            status,
            gstn
          }


          const body = JSON.stringify(newInfo);

          try {
            const res = await axios.post("/companyclosure/submit", body, config);
    
            dispatch({
                type: SAVED_INFO,
                payload : res.data
            });
    
           } catch (err) {
    
            const errors = err.response.data.errors;
    
            if(errors) {
                errors.forEach(error =>dispatch(setAlert(error.msg, "danger")));
            }
    
            dispatch({ 
                type:  INFO_SAVE_FAIL,
            });
            }
    };
