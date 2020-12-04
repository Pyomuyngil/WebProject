import React, { Component } from 'react';
import {Card, Icon, Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment, Pagination, Table} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import BoardWrite from "./BoardWrite.js"

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
  <Header as='h2'>국내동행찾기 최근 글</Header>
  <Table celled selectable>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
          <div>'abcd'님 어서오세요!</div>
          <div><a>회원</a></div>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Header as='h2'>여행후기 최근 글</Header>
    <Table celled selectable>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
            <div>'abcd'님 어서오세요!</div>
            <div><a>회원</a></div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </div>
</Router>
  );
}
export default Homepage;
