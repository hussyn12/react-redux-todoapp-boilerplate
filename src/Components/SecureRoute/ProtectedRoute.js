import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const ProtectedRoutes = ({ component: Component, auth }) => (
    <Route
      render={props =>
        auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
)

const mapStateToProps = state => ({
    auth: state.auth
})
  
  export default connect(mapStateToProps)(ProtectedRoutes)