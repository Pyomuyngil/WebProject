import React, { Component, useState } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import ATWrite from "./AfterTravelWrite.js"
import {storage, fire} from './config/fire';

export default function AfterTravel(){





    const [userdata , setUserData] = useState([]);

  React.useEffect(() =>{


    var userId = fire.auth().currentUser;

    var query = fire.database().ref('여행후기');

    const loadingListener = query.on("value" , snapshot =>
        {
          snapshot.forEach(function(childSnapshot)
          {


            setUserData(data =>
              [...data,
                {
                title : childSnapshot.val().title,
                contents : childSnapshot.val().contents,
                writeDate : childSnapshot.val().writeDate,
                email :childSnapshot.val().email,
                userId : childSnapshot.val().userId,
                image :childSnapshot.val().image,
                url : childSnapshot.val().url,
                }



              ]);


          }
        );



         }
       );

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
      {userdata.map((item) =>{



        return(
        <div class="card">
          <div class="image">
          {console.log(item.url)}
          <img src={item.url} />
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
