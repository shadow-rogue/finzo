import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CCform from "./components/auth/CCform";
import CCformfiles from "./components/auth/CCformfiles";
import Navbar from "./components/layouts/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layouts/Landing";
import Alert from "./components/layouts/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect( ()=> {
    store.dispatch(loadUser());
  }, [])

  return(
  <Provider store={store}>
  <Router>
  <Fragment>
    <Navbar/>
    <Route exact path ="/" component={Landing} />
    <Alert />
     <Switch>
       <PrivateRoute exact path="/companyclosure" component={CCform} />
       <PrivateRoute exact path="/companyclosure/files" component={CCformfiles} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/login" component={Login} />
     </Switch>
  </Fragment>
  </Router>
  </Provider>
)};

export default App;
