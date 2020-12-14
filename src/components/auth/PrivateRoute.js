import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: ComposedComponent, layout: Layout , ...rest}) => {
  // redirect if not authenticated; otherwise, return the component imputted into <PrivateRoute />
  class Authentication extends Component{
    handleRender(props) {
      if(!this.props.authenticated){
        return <Redirect to={{
          pathname: '/login',
          state: {
            from: props.location,
            message: 'You need to sign in'
          }
        }} />
      }
      else if(this.props.user && this.props.user.user === null && this.props.user.message === "Logged out due to another active session"){
        localStorage.removeItem('user');
        return <Redirect to={{
          pathname: '/login',
          state: {
            from: props.location,
            message: 'Logged out due to another active session'
          }
        }} />
      } 
      else {
        return <Layout><ComposedComponent {...props} /> </Layout>
      }
    }

    render(){
      return(
          <Route {...rest} render={this.handleRender.bind(this)} />
      )
    }
  } 

  const mapStateToProps = (state) => {
    return{
      authenticated: localStorage.getItem('user') ? true : false,
      user: state.user.loginUser
    }
  }

  const AuthenticationContainer = connect(mapStateToProps)(Authentication)
  return <AuthenticationContainer/>
}

export default PrivateRoute;