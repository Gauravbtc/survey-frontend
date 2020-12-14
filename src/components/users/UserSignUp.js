import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

class UserSignUp extends Component{
  
  constructor(props){
    super(props)
    this.state = {
       success: this.props.loginUser.success  
    }
  }
  
  submit = (values) => {
    this.props.userSignUp(values);
  }

  static getDerivedStateFromProps(props,state){
    if(props.loginUser.success !== state.success){
      props.history.push('/dashboard');
    }
    return null;
  }

  error_message(error){
    if(error){
      const mssages  = Object.keys(error).map(function (key) {
        return [ <li key={key}> {key} {error[key]} </li> ]
      })

     const msg =  <ul>{mssages}</ul>
    return <div className="alert alert-danger">{msg} </div>}
  }


  render(){
    const { loading, error } = this.props.loginUser;
    if(loading) {
      return <div className="container"><h1>Signup</h1><h3>Loading...</h3></div>
    }

    return(
      <div>
        {this.error_message(error)}
        <SignUpForm onSubmit={this.submit}/>
      </div>
    );
  }
}

export default UserSignUp;