import React, { Component } from 'react';
import { Form, Input, Button} from 'semantic-ui-react'
import Menu from "./menu.js";
import fire from './config/fire';
class Home extends Component{

  constructor(props)
  {
    super(props)
    this.state ={

    }
  }
  logout(){
    fire.auth().signOut();
  }
  render(){

    return(
      <div>

        <h1> 당신은 로그인에 성공하였습니다 ! </h1>
        <Button onClick={this.logout}> Logout </Button>
      </div>
    )
  }
}
export default Home;
