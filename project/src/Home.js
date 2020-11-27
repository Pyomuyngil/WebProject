import React, { Component } from 'react';
import ReactDom from 'react-dom';
import fire from './config/fire';
import Homepage from "./Homepage.js";
import MenuClass from "./MenuClass.js";
import Find from "./Find.js";
import AfterTravel from "./AfterTravel.js";
import ATWrite from "./AfterTravelWrite.js";
import FreeBoard from "./FreeBoard.js";
import FaqLayout from "./FaqLayout.js";
import FaqOne from "./FaqOne.js";
import FaqTwo from "./FaqTwo.js";
import SendMail from "./SendMail.js";
import Write from "./Write.js";
import SignUp from './SignUp.js';

import CustomGmap from './CustomGmap.js';



import {Link, BrowserRouter as Router, Route, Redirect} from "react-router-dom";

function Home(){

    return(
      <Router>
        <div classname= "topMenu">
          <MenuClass />
          <Route exact path ="/Home" component ={Homepage} />
          <Redirect to ="/Home" />
          <Route path ="/CustomGmap" component ={CustomGmap} />
          <Route path ="/AfterTravel" component = {AfterTravel} />
          <Route path ="/FreeBoard" component = {FreeBoard} />
          <Route path ="/Write" component ={Write} />
          <Route path ="/FaqLayout" component ={FaqLayout} />
          <Route path ="/FaqOne" component ={FaqOne} />
          <Route path ="/FaqTwo" component ={FaqTwo} />
          <Route path ="/SendMail" component ={SendMail} />
          <Route path ="/ATWrite" component = {ATWrite} />
        </div>
      </Router>
  );
}

export default Home;
