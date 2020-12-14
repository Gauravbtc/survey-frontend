import React, { Component } from 'react';
import NewPasswordForm from './NewPasswordForm';
import { withRouter } from 'react-router-dom'


class MUserPasswordNew extends Component{
  submit = (values) => {
    this.props.muserPasswordNew(values);
  }

  error_message(error){
    if(error){
    return <div className="alert alert-danger">{error.message} </div>}
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loginUser.success){
      if(nextProps.loginUser.user.role === "admin"){
        this.props.history.push('/dashboard');
       }
       else{
         this.props.history.push('/userdashboard');
       }
    }
  }

  render(){
    const { loading , error } = this.props.loginUser;
    if(loading) {
      return <div className="container"><h1>Loading</h1></div>
    }

    return(
      <div>
        {this.error_message(error)}
        <NewPasswordForm onSubmit={this.submit} token = {this.props.match.params.query1}/>
      </div>  
    );
  }
}

export default withRouter(MUserPasswordNew);