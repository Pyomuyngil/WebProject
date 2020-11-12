import React, { Component } from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'
import fire from './config/fire';
import Comments from "./comment.js";
import MenuClass from "./MenuClass.js";
class Home extends Component{

  constructor(props)
  {
    super(props)
    this.state ={
      user : {}
    }
  }

  render(){

    return(
      <div classname= "topMenu">

    <MenuClass />
    </div>
  );
  }
}
export default Home;
