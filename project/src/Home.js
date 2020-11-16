import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,   Segment} from 'semantic-ui-react'
import fire from './config/fire';
import Comments from "./comment.js";
import MenuClass from "./MenuClass.js";
import Find from "./Find.js";
import AfterTravel from "./AfterTravel.js";
import FreeBoard from "./FreeBoard.js";
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";

const MainHome = () =>{

}
function Home(){

    return(
      <Router>
      <div classname= "topMenu">
      <div>
      <h1>home </h1>
      </div>
        <MenuClass />
        <Route path ="/">
        <Redirect to ="/Home"/>
        </Route>
        <Route path ="/Find" component ={ Find } />
        <Route path = "/AfterTravel" component = {AfterTravel} />
        <Route path = "/FreeBoard" component = {FreeBoard} />


      </div>
        </Router>


  );


}
export default Home;
