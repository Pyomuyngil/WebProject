import React, { Component } from 'react';
import {Container, Header, Image, Button} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import BoardWrite from "./Write.js"
import LoadData from "./LoadData.js"
import fire from './config/fire';
function FreeBoard(){
  return(
    <div>
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>
          자유게시판
          <Link to='/Write'>
            <Button style={{ marginLeft: '33em' }} className="ui blue button">
              글쓰기
            </Button>
          </Link>
        </Header>
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
      </Container>
    </div>
  );
}

export default FreeBoard;
