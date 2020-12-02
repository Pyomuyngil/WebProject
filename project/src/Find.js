import React, { Component } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment, Pagination} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import FindWrite from "./FindWrite.js"


function Find(){
  return (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>국내동행찾기
      <Link to = '/FindWrite'>
        <Button style={{ marginLeft: '25em' }} className="ui blue button">
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
        <div class="card">
          <div class="image">
            <img src="/images/avatar2/large/molly.png" />
          </div>
          <div class="content">
            <div class="header">Molly</div>
          <div class="meta">
            <span class="date">Coworker</span>
          </div>
          <div class="description">
            Molly is a personal assistant living in Paris.
          </div>
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
          <div class="meta">
            <a>Coworker</a>
          </div>
          <div class="description">
            Elyse is a copywriter working in New York.
          </div>
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
          <div class="meta">
            <a>Coworker</a>
          </div>
          <div class="description">
            lala is a copywriter working in New York.
          </div>
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
export default Find;
