import React, { Component, useState } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button, Input} from 'semantic-ui-react'
import {storage, fire} from './config/fire';
import AfterTravel from "./AfterTravel.js"
import ImageUpload from "./ImageUpload.js"
import { Link,BrowserRouter as Router,Switch,Route,Redirect, useHistory  } from "react-router-dom";

function AfterTravelWrite(){


const history = useHistory();
var [titletext, setTitletext ] = useState("");
var [contentstext , setContentstext] = useState("");
var [image, setImage] = useState("");
var [url, setUrl] = useState("");

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

const handleChange = (e) =>
{
  e.preventDefault();
  if(e.target.files[0]){
    setImage(e.target.files[0]);
  }
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
    fire.database().ref('여행후기').push().set({
      userId : userId.uid,
      email : userId.email,
      title : title,
      contents : contents,
      writeDate : writeDate,
      image : image.name,
    });

    var folder = userId.email + "/"
    var uploadTask = storage.ref(folder + image.name).put(image);
    uploadTask.on('state_changed',
          (snapshot) => {
          }, (error) => {
            console.log(error);
          });

    setTitletext('');
    setContentstext('');
    history.goBack();
  }
  var query = fire.database().ref('여행후기');

  const upListener = query.on("value" , snapshot =>
      {
        snapshot.forEach(function(childSnapshot)
        {
          fire.database().ref('여행후기/' + childSnapshot.key).update({
            key : childSnapshot.key,
            url : url
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
    <div>
    <input type="file" onChange={handleChange} />
    </div>
    <br/><br/>
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
