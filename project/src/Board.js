import React from 'react'
import {Container, Divider, Dropdown, Grid, Header, Image, Button,
  List,  Menu,  Segment} from 'semantic-ui-react'

import Comments from "./comment.js"
import BoardWrite from "./Write.js"
const Board = () => (
  <div>
    <Menu size='small' fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          같이가요
        </Menu.Item>
        <Menu.Item as='a' style={{ marginLeft: '5em' }}>홈</Menu.Item>
        <Menu.Item as='a'>국내동행찾기</Menu.Item>
        <Menu.Item as='a'>여행후기</Menu.Item>
        <Menu.Item as='a'>자유게시판</Menu.Item>

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
          <Button primary>LOGOUT</Button>
        </Menu.Item>

      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>자유게시판</Header>
      <table class="ui selectable inverted table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th class="right aligned">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>아아아아아아아</td>
            <td>명일</td>
            <td class="right aligned">2020/11/10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>플옵 2차전 보러감</td>
            <td>정욱</td>
            <td class="right aligned">2020/11/10</td>
          </tr>
          <tr>
            <td>3</td>
            <td>고추</td>
            <td>현국</td>
            <td class="right aligned">2020/11/10</td>
          </tr>
        </tbody>
      </table>
      <button class="ui blue button">글쓰기</button>
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

export default Board
