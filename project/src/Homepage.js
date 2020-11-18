import React, { Component } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment, Pagination} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import BoardWrite from "./Write.js"

function Homepage(){
  return (
<Router>
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>홈페이지</Header>
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src="/images/avatar2/large/matthew.png" />
          </div>
          <div class="content">
            <div class="header">Matt Giampietro</div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              Matthew is an interior designer living in New York.
            </div>
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
    </div>

  </Container>
  <Route path = "/FreeBoard/Write" component = {BoardWrite} />
  </div>
</Router>
  );
}
export default Homepage;
