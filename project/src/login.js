import React, { Component } from 'react'
import fire from './config/fire';
import {Button, Input, Form} from 'semantic-ui-react';

class Login extends Component{
  constructor(props)
  {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state ={
      email : "",
      password : ""
    }
  }
  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      console.log(u)

    }).catch((err)=>{
      console.log(err);
    })
  }
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>
  {
    console.log(u)
  }).catch((err)=>{
    console.log(err);
  })
  }



  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value

    })
  }
  render(){

    return(
      <div>
        <Form>
          <Input
          type="email"
          id="email"
          name ="email"
          placeholder = "enter email address"
          onChange = {this.handleChange}
          value = {this.state.email}
          />
          <Input
          name = "password"
          type = "password"
          onChange={this.handleChange}
          id = "password"
          placeholder = "enter password"
          value = {this.state.password}
          />
          <Button onClick={this.login}> Login < /Button>
          <Button onClick = {this.signup}> Signup </Button>
        </Form>
      </div>
    )
  }
}
export default Login;
