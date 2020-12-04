import React, { Component, useState } from 'react';
import ReactDom from 'react-dom';
import fire from './config/fire';
import Homepage from "./Homepage.js";
import MenuClass from "./MenuClass.js";
import Find from "./Find.js";
import FindWrite from "./FindWrite.js";
import AfterTravel from "./AfterTravel.js";
import ATWrite from "./AfterTravelWrite.js";
import ATRead from "./AfterTravelRead.js";
import FreeBoard from "./FreeBoard.js";
import FaqLayout from "./FaqLayout.js";
import FaqOne from "./FaqOne.js";
import FaqTwo from "./FaqTwo.js";
import SendMail from "./SendMail.js";
import BoardWrite from "./BoardWrite.js";
import BoardRead from "./BoardRead.js";
import SignUp from './SignUp.js';
import App from './App.js';
import GoogleMap from './GoogleMap.js';



import {Link, BrowserRouter as Router, Route, Redirect} from "react-router-dom";

function Home(){
  const [title,setTitle] = useState([]);
  const [contents,setContents] = useState([]);
  const [writeDate, setDate] = useState([]);
  const [email, setEmail] = useState([]);
  const [key, setKey] = useState([]);

  const [userUid, setUid] = useState([]);


  const ff = fire.auth().onAuthStateChanged(function(user){
    if(user)
    {
        setUid(user.uid);
    }
    else {

    }
  });


  React.useEffect(() =>{



    console.log(userUid); // 이게 userUid야 이거 가지고 사용해

    const loadingListener2 = fire.database().ref('여행후기').on("value" , snapshot =>
        {
          snapshot.forEach(function(childSnapshot)
          {
          console.log(childSnapshot);
          setTitle(title => [...title, childSnapshot.val(),]);
          setKey(key => [...key,childSnapshot.val(),]);
          }
        );
      });
       return () => {
             fire.database().ref('여행후기').off('value', loadingListener2);
           };

   const loadingListener3 = fire.database().ref('자유게시판').on("value" , snapshot =>
       {
         snapshot.forEach(function(childSnapshot)
         {
         console.log(childSnapshot);
         setTitle(title => [...title, childSnapshot.val(),]);
         setKey(key => [...key,childSnapshot.val(),]);
         }
       );
     });
      return () => {
            fire.database().ref('자유게시판').off('value', loadingListener3);
          };


    },[]);
    return(
      <Router>
        <div classname= "topMenu">
          <MenuClass />
          <Route exact path ="/Home" component ={Homepage} />
          <Redirect to ="/Home" />
          <Route path ="/Find" component ={Find} />
          <Route path ="/FindWrite" component = {FindWrite} />
          <Route path ="/GoogleMap" component = {GoogleMap} />
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
          <Route path ={'/'+item.key} component = {BoardRead} />,
          <Route path ={'/'+item.key} component = {ATRead} />
        )
      })}
        </div>
      </Router>
  );
}

export default Home;
