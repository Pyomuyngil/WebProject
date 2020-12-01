import React, { Component, useState } from 'react';
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
import BoardWrite from "./BoardWrite.js";
import BoardRead from "./BoardRead.js";
import SignUp from './SignUp.js';

import GoogleMap from './GoogleMap.js';



import {Link, BrowserRouter as Router, Route, Redirect} from "react-router-dom";

function Home(){
  const [title,setTitle] = useState([]);
  const [contents,setContents] = useState([]);
  const [writeDate, setDate] = useState([]);
  const [email, setEmail] = useState([]);
  const [key, setKey] = useState([]);




  React.useEffect(() =>{
   var userId = fire.auth().currentUser.uid;

   var query = fire.database().ref('자유게시판');

   const loadingListener = query.on("value" , snapshot =>
       {
         snapshot.forEach(function(childSnapshot)
         {
         console.log(childSnapshot);
         setTitle(title => [...title, childSnapshot.val(),]);
         setContents(contents => [...contents, childSnapshot.val(),]);
         setDate(writeDate => [...writeDate,childSnapshot.val(),]);
         setEmail(email => [...email,childSnapshot.val(),]);
         setKey(key => [...key,childSnapshot.val(),]);
         }
       );


      });
      return () => {
            query.off('value', loadingListener);
          };
    },[]);
    return(
      <Router>
        <div classname= "topMenu">
          <MenuClass />
          <Route exact path ="/Home" component ={Homepage} />
          <Redirect to ="/Home" />
          <Route path ="/GoogleMap" component ={GoogleMap} />
          <Route path ="/AfterTravel" component = {AfterTravel} />
          <Route path ="/FreeBoard" component = {FreeBoard} />
          <Route path ="/BoardWrite" component ={BoardWrite} />
          <Route path ="/FaqLayout" component ={FaqLayout} />
          <Route path ="/FaqOne" component ={FaqOne} />
          <Route path ="/FaqTwo" component ={FaqTwo} />
          <Route path ="/SendMail" component ={SendMail} />
          <Route path ="/ATWrite" component = {ATWrite} />
          {title.map((item) =>{
            return(
          <Route path ={'/'+item.key} component = {BoardRead} />
        )
      })}
        </div>
      </Router>
  );
}

export default Home;
