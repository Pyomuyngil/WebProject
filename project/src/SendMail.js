import React, { Component } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button, Input} from 'semantic-ui-react'

import FreeBoard from "./FreeBoard.js"

import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
function SendMail(){

  return (

    <form action="https://script.google.com/macros/s/AKfycbxw0epHF3eyJjm3qcRBc1ynjX1_eiFbBr3w9PhMWhdln4IPL2BT/exec" method="post">
    <div>

    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>문의하기 / 신고하기</Header>
    <div class="form-elements">
    <div class="pure-group">
    <label for="name">제목</label>
    <Input fluid id="name" name="name"></Input>
    </div>
    <div class="pure-group">
    <label for="message">문의내용</label>
    <textarea id="message" name="message" rows="10"></textarea>
    </div>
    <div class="pure-group">
    <label for="email">회신받을이메일</label>
    <Input fluid id="email" name="email" type="email"
    required placeholder="your.name@email.com"></Input>
    </div>
    </div>
    <button>
      Send</button>
    </Container>

    </div>
    </form>
  );
}
export default SendMail;
