import React, { Component } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'

import Comments from "./comment.js"
import FreeBoard from "./FreeBoard.js"

import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
function BoardWrite(){

  return (
    <div>
    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>글쓰기</Header>
    <div class="ui form">
    <div class="field">
    <label>제목</label>
    <textarea rows="1"></textarea>
    </div>
    <div class="field">
    <label>내용</label>
    <textarea></textarea>
    </div>
    </div>
    <Button.Group>
    <Button positive>Save</Button>
    <Button.Or />
    <Button>Cancel</Button>
    </Button.Group>
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign='center'>
    <Grid divided inverted stackable>
    <Grid.Column width={3}>
    <Header inverted as='h4' content='Group 1' />
    <List link inverted>
    <List.Item as='a'>Link One</List.Item>
    <List.Item as='a'>Link Two</List.Item>
    </List>
    </Grid.Column>
    <Grid.Column width={3}>
    <Header inverted as='h4' content='Group 2' />
    <List link inverted>
    <List.Item as='a'>Link One</List.Item>
    <List.Item as='a'>Link Two</List.Item>
    </List>
    </Grid.Column>
    <Grid.Column width={3}>
    <Header inverted as='h4' content='Group 3' />
    <List link inverted>
    <List.Item as='a'>Link One</List.Item>
    <List.Item as='a'>Link Two</List.Item>
    </List>
    </Grid.Column>
    <Grid.Column width={7}>
    <Header inverted as='h4' content='Footer Header' />
    <p>
    Extra space for a call to action inside the footer that could help re-engage users.
    </p>
    </Grid.Column>
    </Grid>

    <Divider inverted section />
    <Image centered size='mini' src='/logo.png' />
    <List horizontal inverted divided link size='small'>
    <List.Item as='a' href='#'>
    Site Map
    </List.Item>
    <List.Item as='a' href='#'>
    Contact Us
    </List.Item>
    <List.Item as='a' href='#'>
    Terms and Conditions
    </List.Item>
    <List.Item as='a' href='#'>
    Privacy Policy
    </List.Item>
    </List>
    </Container>
    </Segment>
    </div>
  );
}
export default BoardWrite;
