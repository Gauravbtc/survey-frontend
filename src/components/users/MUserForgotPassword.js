import React ,{ Component } from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'
import { withRouter } from 'react-router-dom'

class MUserForgotPassword extends Component{
  submit = (values) => {
   this.props.muserForgotPassword(values);
  }

  error_message(error){
    if(error){
    return <div className="alert alert-danger">{error} </div>}
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.loginUser.success){
       this.props.history.push('/musers/confirmation');
    }
  }

  render(){
    const { loading, message } = this.props.loginUser;

    if(loading) {
      return <div className="container"><h3>Loading...</h3></div>
    }
    return(
      <div>
         {this.error_message(message)}
        <ForgotPasswordForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default withRouter(MUserForgotPassword);