import React, { Component, useState } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import ATWrite from "./AfterTravelWrite.js"
import {storage, fire} from './config/fire';

function AfterTravel(){

  const [title,setTitle] = useState([]);
  const [contents,setContents] = useState([]);
  const [writeDate, setDate] = useState([]);
  const [email, setEmail] = useState([]);
  const [key, setKey] = useState([]);
  const [image, setImage] = useState([]);

var pathReference = storage.ref('images/stars.jpg');

  React.useEffect(() =>{
   var userId = fire.auth().currentUser;

   var query = fire.database().ref('여행후기');

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
         setImage(image => [...image,childSnapshot.val(),]);
         }
       );


      });
      return () => {
            query.off('value', loadingListener);
          };
    },[]);


  return (

  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>여행후기
      <Link to='/ATWrite'>
        <Button style={{ marginLeft: '29em' }} className="ui blue button">
          글쓰기
        </Button>
        </Link>
      </Header>

      <div class="ui link cards">
      {title.map((item) =>{
        return(
        <div class="card">
          <div class="image">
            <img src={storage.ref(item.email + item.image).getDownloadURL()} />
          </div>
          <div class="content">
            <div class="header">{item.title}</div>
          </div>
          <div class="extra content">
            <span class="right floated">
            {item.writeDate}
            </span>
            <span>
            <i class="user icon"></i>
            {item.email}
            </span>
          </div>
        </div>
      )
    })}
    </div>

  </Container>
  </div>
  );
}
export default AfterTravel;
