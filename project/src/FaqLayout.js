import React from 'react'
import {Container, Header} from 'semantic-ui-react'
import {Link, BrowserRouter as Router, Route, Redirect} from "react-router-dom";


const FaqLayout = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>FAQ</Header>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>번호</th>
            <th>자주 묻는 질문</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <Link to='/FaqOne'>
            <td>'같이가요'는 어떤 사이트인가요?</td>
            </Link>
          </tr>
          <tr>
            <td>2</td>
            <Link to='/FaqTwo'>
            <td>홈페이지 이용방법은 어떻게 되나요?</td>
            </Link>
          </tr>
        </tbody>
      </table>
    </Container>
  </div>
)

export default FaqLayout
