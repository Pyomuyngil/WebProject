import React, { Component, useState } from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, Button, Input} from 'semantic-ui-react'
import fire from './config/fire';
import AfterTravel from "./AfterTravel.js"

import { Link,BrowserRouter as Router,Switch,Route,Redirect, useHistory  } from "react-router-dom";

function AfterTravelWrite(){



  return (
    <form>
    <div>

    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>글쓰기</Header>
    <div class ='ui form'>
    <div class="field">
    <label>제목</label>
    <Input fluid id = "titlearea" ></Input>
    </div>
    <div class="field">
    <label>내용</label>
    <textarea id ="contentsarea" rows='20'></textarea>
    </div>
    </div>
    <Button.Group>
    <Button positive>Save</Button>
    <Button.Or />
    <Link to='/AfterTravel'>
    <Button>Cancel</Button>
    </Link>
    </Button.Group>

    </Container>

    </div>
    </form>
  );
}
export default AfterTravelWrite;
