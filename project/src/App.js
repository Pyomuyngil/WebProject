import React, {Component} from 'react';
import {Button, Progress, Input, Image, Comment, Form, Header} from 'semantic-ui-react';

//import Menu from "./menu.js"
import fire from './config/fire';
import Login from './login';
import Home from './Home';
import FaqLayout from './FAQ.js'
import Board from './Board.js'
import BoardWrite from './Write.js'
class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      user : {}
    }
  }


componentDidMount(){
  this.authListner();
}
  authListner(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else {
        this.setState({ user : null })
      }
    })
  }
  render()
  {
    return (
      <div className="App">
        { this.state.user ? (<Home/>) : (<Login/>) }

      </div>



           );
  }

}
export default App;
