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
          const data = () => {
            var userId = fire.auth().currentUser.uid;
            var newPostKey = fire.database().ref().child('자유게시판').push().key;
            fire.database().ref('자유게시판' + newPostKey).on('value', function(e){
              var usrData = data.val();
              var keys = Object.keys(usrData);
              firedata(e.val().title, e.val().contents, e.val().email, e.val().writeDate)
             })
           }

           function firedata(title, contents, email, writeDate){
               var title = title
               var contents = contents
               var email = email
               var date = writeDate
               return title, contents, email, date
             }

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
            <tr>
              <td>1</td>
              <td>{firedata()}</td>
            </tr>
            </tbody>
          </table>

        </Container>

      </div>

    );
  }

}

export default FreeBoard;
