import React, {Component} from 'react'
import {Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react';
import {Link, BroswerRouter as Router,Switch,Route} from "react-router-dom";
import fire from './config/fire.js';
import "firebase/auth";
import firebase from "firebase/app";
import Comments from "./comment.js";
import Home from "./Home.js";
import FAQclass from "./FAQclass.js";



const  MenuClass = () =>{
    return (
      <div>
      <nav>
      <Menu size='small' fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            같이가요
          </Menu.Item>
          <Link to='/Home'>
          <Menu.Item as='a' style={{ marginLeft: '5em' }}>홈</Menu.Item>
          </Link>
          <Link to = '/Find'>
          <Menu.Item as='a'>국내동행찾기</Menu.Item>
          </Link>
          <Link to = '/AfterTravel'>
          <Menu.Item as='a'>여행후기</Menu.Item>
          </Link>
          <Link to = '/FreeBoard'>
          <Menu.Item as='a'>자유게시판</Menu.Item>
          </Link>
          <Dropdown item simple text='문의 및 신고'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button onClick={ () =>{
              firebase.auth().signOut();
            }}>LOGOUT</Button>
          </Menu.Item>

        </Container>
      </Menu>


</nav>

      </div>

    );
}

export default MenuClass;
