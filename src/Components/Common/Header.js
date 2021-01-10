import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"
import {Menu} from "antd"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("JwtToken");
    if (token) {
      this.setState({login: true})
    } 
  }

  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
        style={{lineHeight: "64px"}}
      >
        <Menu.Item>
          <span>Task Data App</span>
        </Menu.Item>
        <Menu.Item key="/task">
          <NavLink to="/task">
            <span>Task</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/taskform">
          <NavLink to="/taskform">
            <span>Create Task</span>
          </NavLink>
        </Menu.Item>

        {!this.state.login ?
          <Menu.Item key="/" style={{float: "right"}}>
            <NavLink to="/">
              <span>Login</span>
            </NavLink>
          </Menu.Item>
          :
          <Menu.Item key="/" onClick={() => {
            this.setState({login: false});
            this.props.logout()
          }} style={{float: "right"}}>

            <span>Logout</span>

          </Menu.Item>
        }

        {!this.state.login &&
        <Menu.Item key="/register" style={{float: "right"}}>
          <NavLink to="/register">
            <span>Register</span>
          </NavLink>
        </Menu.Item>
        }
      </Menu>
    )
  }
}

export default withRouter(Header)