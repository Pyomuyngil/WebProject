import React, { Component ,useState } from 'react';
import {Container, Header, Image, Button} from 'semantic-ui-react'
import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import BoardWrite from "./Write.js"
import BoardItem from "./Boarditem.js"

import fire from './config/fire';
function FreeBoard(){

   const [title,setTitle] = useState([]);
   const [contents,setContents] = useState([]);
   const [date, setDate] = useState([]);





   React.useEffect(() =>{
    var userId = fire.auth().currentUser.uid;

    var query = fire.database().ref('자유게시판');

    const loadingListener = query.on("value" , snapshot =>
        {
          snapshot.forEach(function(childSnapshot)
          {

          console.log(childSnapshot);
          setTitle(title => [...title, childSnapshot.val(),]);
          setContents(contents => [...contents, childSnapshot.val(),]);
          setDate(date => [...date,childSnapshot.val(),]);
          });


       });
       return () => {
             query.off('value', loadingListener);
           };
     },[]);




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

          <div>
            {title.map((item) =>{

            return(
              <div>
              <h3>제목{item.title}</h3>
              <h3>내용{item.contents}</h3>
              <h3>날짜{item.date}</h3>
              <h3>-----------------</h3>

              </div>
            )


          })}
            </div>
        </Container>

      </div>

    );


}

export default FreeBoard;
