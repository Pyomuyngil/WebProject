import React, { Component,useState } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment, Pagination} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import FindWrite from "./FindWrite.js"
import {storage, fire} from './config/fire';

function Find(){
  const [userdata , setUserData] = useState([]);
  const [flag, setflag] = useState(false);
React.useEffect(() =>{


  var userId = fire.auth().currentUser;

  var query = fire.database().ref('동행게시판');

  const loadingListener = query.on("value" , async (snapshot) =>
      {
        setUserData([]);
        await snapshot.forEach(function(childSnapshot)
        {


          setUserData(data =>
            [...data,
              {
              title : childSnapshot.val().title,
              contents : childSnapshot.val().contents,
              writeDate : childSnapshot.val().writeDate,
              email :childSnapshot.val().email,
              userId : childSnapshot.val().userId,
              markers :childSnapshot.val().markers,
              tags : childSnapshot.val().tags,
              key : childSnapshot.val().key
              }
            ]);


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
    {userdata.map((item) =>{



      return(
      <div class="card">

        <div class="image">

        <img src={item.url}/>

        </div>
        <Link to={'/'+item.key}>
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

        </Link>
      </div>
    )
  })}
  </div>

</Container>
</div>

)
}
export default Find;
