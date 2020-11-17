import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,   Segment} from 'semantic-ui-react'
import fire from './config/fire';
import MenuClass from "./MenuClass.js";
import Find from "./Find.js";
import AfterTravel from "./AfterTravel.js";
import FreeBoard from "./FreeBoard.js";
import Write from "./Write.js";
import SignUp from './SignUp.js';
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";


function Home(){



    return(
      <Router>
      <div classname= "topMenu">
      <div>
      <h1>home </h1>
      </div>
        <MenuClass />
        <Route exact path ="/">
        <Redirect to ="/Home"/>
        </Route>
        <Route path ="/Find" component ={ Find } />
        <Route path = "/AfterTravel" component = {AfterTravel} />
        <Route path = "/FreeBoard" component = {FreeBoard} />
        <Route path ="/Write" component ={ Write} />




      </div>

        </Router>


  );


}
export default Home;
