import React, { Component } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment, Pagination} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import BoardWrite from "./Write.js"


function AfterTravel(){
  return (
<Router>
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>여행후기
      <Link to='/FreeBoard/Write'>
        <Button style={{ marginLeft: '29em' }} className="ui blue button">
          글쓰기
        </Button>
        </Link>
      </Header>
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src="/images/avatar2/large/matthew.png" />
          </div>
          <div class="content">
            <div class="header">Matt Giampietro</div>
          </div>
          <div class="extra content">
            <span class="right floated">
            Joined in 2013
            </span>
            <span>
            <i class="user icon"></i>
            75 Friends
            </span>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="/images/avatar2/large/molly.png" />
          </div>
          <div class="content">
            <div class="header">Molly</div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2011
          </span>
          <span>
            <i class="user icon"></i>
            35 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/elyse.png" />
        </div>
        <div class="content">
          <div class="header">Elyse</div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2014
          </span>
          <span>
            <i class="user icon"></i>
            151 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/elyse.png" />
        </div>
        <div class="content">
          <div class="header">lala</div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2013
          </span>
          <span>
            <i class="user icon"></i>
            151 Friends
          </span>
        </div>
      </div>
    </div>

    <div>
    <Pagination defaultActivePage={5} totalPages={5} />
    </div>

  </Container>
  <Route path = "/FreeBoard/Write" component = {BoardWrite} />
  </div>
</Router>
  );
}
export default AfterTravel;
