import React from 'react'
import {Container, Header} from 'semantic-ui-react'

const FaqLayout = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>FAQ</Header>
      <table class="ui selectable inverted table">
        <thead>
          <tr>
            <th>번호</th>
            <th>자주 묻는 질문</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>페이지 어케 연결해</td>
          </tr>
          <tr>
            <td>2</td>
            <td>뭔가 한거같지가 않아</td>
          </tr>
          <tr>
            <td>3</td>
            <td>고추</td>
          </tr>
          <tr>
            <td>4</td>
            <td>아스날</td>
          </tr>
        </tbody>
      </table>
    </Container>
  </div>
)

export default FaqLayout
