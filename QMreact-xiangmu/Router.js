import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import asyncComponents from  "./components/asyncComponents"
const FooterComponents=asyncComponents(()=>import("./components/Footer"))
class RouterComponentsss extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Route path={"/api"} component={FooterComponents}></Route>
              <Redirect to={"/api/home"}></Redirect>
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default RouterComponentsss;
