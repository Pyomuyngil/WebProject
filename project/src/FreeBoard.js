import React, { Component } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment, Pagination} from 'semantic-ui-react'
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
            <tr>
              <td>1</td>
              <td>아아아아아아아</td>
              <td>명일</td>
              <td className="right aligned">2020/11/10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>플옵 2차전 보러감</td>
              <td>정욱</td>
              <td className="right aligned">2020/11/10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>;;;;;;;</td>
              <td>현국</td>
              <td className="right aligned">2020/11/10</td>
            </tr>
            <tr>
              <td>4</td>
              <td>에ㅔ...</td>
              <td>으에,,,</td>
              <td className="right aligned">2020/11/10</td>
            </tr>
            <tr>
              <td>5</td>
              <td>에ㅔ...</td>
              <td>으에,,,</td>
              <td className="right aligned">2020/11/10</td>
            </tr>
          </tbody>
        </table>
        <div>
        <Pagination defaultActivePage={5} totalPages={5} />
        </div>

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
