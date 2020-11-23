import React, { Component } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment, Pagination} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import BoardWrite from "./Write.js"

function Homepage(){
  return (
<Router>
<div class ='ui form' style={{ marginTop: '8em', marginLeft: '2em' }}>
<Grid>
<Grid.Row>
<Grid.Column width={3}>
  <div>
      <div class="ui link cards">
        <div class="card">
          <div class="content">
            <div class="header">'abcd'님 어서오세요!</div>
            <div class="meta">
              <a>회원</a>
            </div>
            <div class="description">
              어서오시라구요 꼴받게하지말고
            </div>
          </div>
        </div>
    </div>
  </div>
  </Grid.Column>
  <Grid.Column width={9}>
  <table className="ui selectable inverted table">
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th className="right aligned">날짜</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <table className="ui selectable inverted table">
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th className="right aligned">날짜</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </div>
</Router>
  );
}
export default Homepage;
