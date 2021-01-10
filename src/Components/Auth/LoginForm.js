import React, {Component} from 'react'
import { Form, Input, Button, Row } from 'antd'
import { Link, Redirect } from "react-router-dom"

class LoginForm extends Component {
    
  render () {
    return (
      <Row>
        <h2>Login</h2>
        <Form style={{ width: "300px"}} >
            <Form.Item>
              <span style={{ color: "red" }}>{this.props.error}</span>
            </Form.Item>
          <label >USERNAME:</label>
          <Form.Item name="email" rules={[
            { required: true,
              message: 'Please input your username!'},
            ]}
          >
            <Input placeholder="Username"
              onChange = {this.props.onChange}
              value = {this.props.data.email} />
          </Form.Item>
          <label >PASSWORD:</label>
          <Form.Item name="password" rules={[
            { min: 7,
              required: true,
              message: 'Password Must be greater than 7 characters'},
            ]}
          >
            <Input placeholder="Password"
              type="password"
              onChange = {this.props.onChange}
              value = {this.props.data.email} />
          </Form.Item>

          <Form.Item shouldUpdate={true}>
            <Button htmlType="submit" onClick = {this.props.onSubmit} >
              {this.props.isAuthenticated ? <Redirect to="/task"/> : null}
              Login
            </Button>
            <br />
            Or <Link to="/register">Register Now</Link>
          </Form.Item>         
        </Form> 
      </Row> 
    )   
  }
}

export default LoginForm