import React, { Component } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import BoardWrite from "./Write.js"
import Board from "./Board.js"

function FreeBoard(){

    return(



      <div>
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>자유게시판</Header>
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


        <Link to='/Write'>
          <Button className="ui blue button">
          글쓰기
          </Button>
        </Link>

    </Container>






    </div>





  );
}

export default FreeBoard;
