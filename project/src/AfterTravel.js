import React, { Component } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment, Pagination} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import ATWrite from "./AfterTravelWrite.js"
import Person from './ss.png'

function AfterTravel(){
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
        <div class="card">
          <div class="image">
            <img src={Person} />
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
            <img src="ss.png" />
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
          <img src="ss.png" />
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
          <img src="ss.png" />
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
  </div>
  );
}
export default AfterTravel;
