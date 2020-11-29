import React, { Component, useState } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button, Input} from 'semantic-ui-react'
import fire from './config/fire';
import AfterTravel from "./AfterTravel.js"
import ImageUpload from "./ImageUpload.js"
import { Link,BrowserRouter as Router,Switch,Route,Redirect, useHistory  } from "react-router-dom";

function AfterTravelWrite(){


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
    var writeDate = Date.now();
    var userId = fire.auth().currentUser;
    fire.database().ref('여행후기').push().set({
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
    <ImageUpload />
    </div>
    <Button.Group>
    <Button onClick={saveData} positive>Save</Button>
    <Button.Or />
    <Link to='/AfterTravel'>
    <Button>Cancel</Button>
    </Link>
    </Button.Group>

    </Container>

    </div>
    </form>

  );
}
export default AfterTravelWrite;
