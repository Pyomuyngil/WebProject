import React, { Component} from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'
import fire from './config/fire';
import FreeBoard from "./FreeBoard.js"

import { Link,BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

 class LoadData extends Component {


     render()
      {
        const data = () => {
          var userId = fire.auth().currentUser.uid;
          fire.database().ref('users/'+userId+'/자유게시판').on('child_added', function(data){
           firedata(data.key, data.var().title, new Date())
          })
        }

        function firedata(iddata, title, time){
            var title = title
            var id = iddata
            var date = date
            return title, id, date
          }

       return(
         <tr>
           <td>1</td>
           <td>{firedata().title}</td>
           <td>{firedata().id}</td>
           <td className="right aligned">{firedata().date.toLocaleDateString('ko-KR')}</td>
         </tr>
         );
     }
 }
export default LoadData;
