import React, { Component } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'

import Comments from "./comment.js"
import FreeBoard from "./FreeBoard.js"

import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
function BoardWrite(){

  return (
    <div>
    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>글쓰기</Header>
    <div class="ui form">
    <div class="field">
    <label>제목</label>
    <textarea rows="1"></textarea>
    </div>
    <div class="field">
    <label>내용</label>
    <textarea></textarea>
    </div>
    </div>
    <Button.Group>
    <Button positive>Save</Button>
    <Button.Or />
    <Button>Cancel</Button>
    </Button.Group>
    </Container>

    


    </div>
  );
}
export default BoardWrite;
