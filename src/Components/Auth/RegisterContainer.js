import React, { Component} from 'react'
import { Form, Row } from 'antd'
import RegisterForm from './RegisterForm'
import {connect} from 'react-redux'
import {registerUser} from '../../Redux/Actions/AuthAction'

class RegisterContainer extends Component {
    constructor () {
        super()
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        this.props.register(newUser)
        console.log(newUser)
    }

    render () {
        return (
            <Row>
                <RegisterForm
                 data={this.state}
                 onChange={this.onChange}
                 error={this.props.register.error}
                 register={this.props.auth.register}
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
      register: data => dispatch(registerUser(data))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)