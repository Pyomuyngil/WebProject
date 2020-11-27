import React, { Component, useState } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'
import fire from './config/fire';
import Find from "./Find.js"
import { Link,BrowserRouter as Router,Switch,Route,Redirect, useHistory  } from "react-router-dom";

function FindWrite(){

    return (
      <form>
      <div>

      <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>글쓰기</Header>
      <div class ='ui form'>
      <div class="field">
      <label>제목</label>
      <textarea id = "titlearea" rows="1"></textarea>
      </div>
      <div class="field">
      <label>내용</label>
      <textarea id ="contentsarea" rows='20'></textarea>
      </div>
      </div>
      <Button.Group>
      <Button positive>Save</Button>
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
export default FindWrite;
