import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import LoginContainer from './Components/Auth/LoginContainer'
import RegisterContainer from './Components/Auth/RegisterContainer'
import ProtectedRoutes  from './Components/SecureRoute/ProtectedRoute'
import TodoList from './Components/Todo/TodoList'
import TodoForm from './Components/Todo/TodoForm'
import Header from './Components/Common/Header'
import {Provider} from "react-redux"
import store from './Redux/Store/Store'
import {logoutUser} from './Redux/Actions/AuthAction' 

function App() {
    const onLogout = () => {
      store.dispatch(logoutUser())
      return <Redirect to="/" />
    }
  return (
    <Provider store={store}>
      <Router>
        <div className="App" >
          <header className="App-header">
            <Header logout={onLogout} />
          </header>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <ProtectedRoutes exact path="/task" component={TodoList} />
            <ProtectedRoutes exact path="/taskform" component={() => <TodoForm mode={"create"} />} />
            <ProtectedRoutes exact path="/task/:todoId" component={props => {
              const todoId = props.location.pathname.replace("/task/", "")
              return(
                <TodoForm todoId={todoId} mode={"edit"} />
                )
              }} />
          </Switch>
        </div>
      </Router>  
    </Provider>  
  )
}

export default App