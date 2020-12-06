import React, { Component, useState } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button, Input} from 'semantic-ui-react'
import fire from './config/fire';
import FreeBoard from "./FreeBoard.js"

import { Link,BrowserRouter as Router,Switch,Route,Redirect, useHistory  } from "react-router-dom";

function BoardWrite(){


const history = useHistory();
var [titletext, setTitletext ] = useState("");
var [contentstext , setContentstext] = useState("");

const titleHandler = (e) =>
{
   e.preventDefault();
  setTitletext(e.target.value);

}
const contentsHandler = (e) =>
{
   e.preventDefault();
    setContentstext(e.target.value);
}

const saveData = (e)  =>
{
 e.preventDefault();

  if(titletext === '' || contentstext ==='')
  {

  }
  else {
    var title = titletext;
    var contents = contentstext;
    var today = new Date();
    var year = today.getFullYear(); // 년도
    var month = today.getMonth() + 1;  // 월
    var date = today.getDate();  // 날짜
    var writeDate = year + "-" + month + "-" + date
    var userId = fire.auth().currentUser;
    fire.database().ref('자유게시판').push().set({
      userId : userId.uid,
      email : userId.email,
      title : title,
      contents : contents,
      writeDate : writeDate
    });

    setTitletext('');
    setContentstext('');
    history.goBack();

  }

  var query = fire.database().ref('자유게시판');

  const upListener = query.on("value" , snapshot =>
      {
        snapshot.forEach(function(childSnapshot)
        {
          fire.database().ref('자유게시판/' + childSnapshot.key).update({
            key : childSnapshot.key
          });
        }
      );


     });
     return () => {
           query.off('value', upListener);
         };

}


  return (
    <form>
    <div>

    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>글쓰기</Header>
    <div class ='ui form'>
    <div class="field">
    <label>제목</label>
    <Input fluid id = "titlearea" onChange ={titleHandler}></Input>
    </div>
    <div class="field">
    <label>내용</label>
    <textarea id ="contentsarea" rows='20' onChange = {contentsHandler}></textarea>
    </div>
    </div>
    <Button.Group>
    <Button onClick={saveData} positive>Save</Button>
    <Button.Or />
    <Link to='/FreeBoard'>
    <Button>Cancel</Button>
    </Link>
    </Button.Group>

    </Container>

    </div>
    </form>

  );
}
export default BoardWrite;
