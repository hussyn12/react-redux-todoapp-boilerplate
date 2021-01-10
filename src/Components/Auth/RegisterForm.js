import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Link, Redirect } from "react-router-dom"

class RegisterForm extends Component {

    render() {
        return (
            <div>
                <h2>Register</h2>
                <Form>
                    <label >NAME:</label>
                    <Form.Item name="name" rules={[
                    { required: true, message: 'Please input your name'},
                    ]}
                    >
                    <Input placeholder="Name"
                        onChange = {this.props.onChange}
                        value = {this.props.data.name}
                        type = "text"
                    />
                    </Form.Item>

                    <label >USERNAME:</label>
                    <Form.Item name="email" rules={[
                    { required: true, message: 'Please input your username!'},
                    ]}
                    >
                    <Input placeholder="Username"
                        onChange = {this.props.onChange}
                        value = {this.props.data.email}
                        type = "text"
                    />
                    </Form.Item>

                    <label >PASSWORD:</label>
                    <Form.Item name="password" rules={[
                    { required: true, message: 'Please input your password!'},
                    ]}
                    >
                    <Input placeholder="Password"
                        onChange = {this.props.onChange}
                        value = {this.props.data.password}
                        type = "text"
                    />
                    </Form.Item>

                    <Form.Item shouldUpdate={true}>
                        <Button htmlType="submit" onClick = {this.props.onSubmit} >
                         {this.props.register ? (<Redirect to="/"/>) : 
                         this.props.Authenticated ? (<Redirect to="/task"/>) :
                         (<Redirect to="/register"/>)}
                          Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default RegisterForm