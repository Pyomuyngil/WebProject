import React from 'react' // 일단 로그인폼
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input
          fluid icon='user'
          iconPosition='left'
          placeholder='E-mail address'
          type="email"
          id="email"
          name ="email"
          onChange = {this.handleChange}
          value = {this.state.email}
          />
          <Form.Input
            fluid icon='lock'
            iconPosition='left'
            placeholder='Password'
            type = "password"
            id = "password"
            name = "password"
            onChange={this.handleChange}
            value = {this.state.password}
          />

          <Button onClick={this.login} color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Button onClick = {this.signup} color='teal' fluid size='large'>
        Sign Up
      </Button>
    </Grid.Column>
  </Grid>
)

export default LoginForm
