import React, { Component } from 'react';
import {Container, Header, Image, Button} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import BoardWrite from "./Write.js"
import BoardItem from "./Boarditem.js"
import fire from './config/fire';

class FreeBoard extends Component {
  state = {
       maxNo: 1,
       boards: [
       ],
        selectedBoard:{}
   }

      handleSaveData = (data) => {
        if (!data.brdno) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data }),
                selectedBoard: {}
            });
        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? {...data }: row),
                selectedBoard: {}
            })
        }
    }

    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
    }



  render(){
    const { boards} = this.state;

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
              {
                boards.map(row =>
                            (<BoardItem key={row.brdno} row={row} onSelectRow={this.handleSelectRow} />)
              )
            }
            </tbody>
          </table>
        </Container>
      </div>
    );
  }

}

export default FreeBoard;
