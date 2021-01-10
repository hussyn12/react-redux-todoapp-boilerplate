import React, { Component} from 'react'
import { Form, Row } from 'antd'
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {loginUser} from '../../Redux/Actions/AuthAction'

class LoginContainer extends Component {

    constructor () {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    
    onSubmit = e => {
        e.preventDefault()
    
        const User = {
        email: this.state.email,
        password: this.state.password,
        }
        
        this.props.login(User)
        console.log(User)
    }

    render() {
        return (
            <Row>
                <LoginForm
                 data={this.state}
                 onChange={this.onChange}
                 error={this.props.auth.error}
                 isAuthenticated={this.props.auth.isAuthenticated}
                 onSubmit={this.onSubmit}
                />
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
  
const mapDispatchToProps = dispatch => {
    return {
      login: data => dispatch(loginUser(data))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)