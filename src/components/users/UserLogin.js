import React, { Component } from 'react';
import LoginForm from './LoginForm';

class UserLogin extends Component{

  constructor(props){
    super(props)
    this.state = {
       success: this.props.loginUser.success  
    }
  }
  
  submit = (values) => {
    this.props.userLogin(values);
  }

  static getDerivedStateFromProps(props,state){
    if(props.loginUser.success !== state.success){
      props.history.push('/dashboard');
    }
    return null;
  }
  
  error_message(error,success){
    if(error){
      const msg = success? 'alert alert-success':'alert alert-danger'
      return <div className={msg}>{error.message} </div>
    }
  }

  render(){
    const { loading, error, success } = this.props.loginUser;
  
    if(loading) {
      return <div className="container"><h1>Login</h1><h3>Loading...</h3></div>
    }
    return(
      <div>
        {this.error_message(error,success)}
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default UserLogin;