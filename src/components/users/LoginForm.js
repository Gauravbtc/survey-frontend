import React ,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import '../../css/login.css';

const validate = (values) => {
  const errors = {}

  if (!values.login) {
    errors.login = 'Email / User name is required'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  return errors
}

const renderField = ({input,label,type,meta: { touched, error }}) =>
  <div>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} className="form-control form-border"/>
      {touched &&
        ((error &&
          <span style={{color: "red"}}>
            {error}
          </span>))}
    </div>
  </div>

class LoginForm extends Component{
  render(){
    const { handleSubmit, submitting } = this.props
    return(
      <form onSubmit={ handleSubmit } className="login_signup animated fadeInRight" id="login-form">
        <div className="form-group">
          <label htmlFor="name">Email/Username</label>
          <Field name="email" component={renderField} type="text"  />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <Field name="password" component={renderField} type="password"  />
        </div>
        <div className="forget-passsword pull-right">
          <Link to="/musers/forgotpassword" className="btn btn-link">Forgot Password</Link>
          <Link to="/signup" className="btn btn-link">Sign up</Link>
        </div>
        <div className="clearfix"></div>
        <button type="submit"  disabled={submitting}  className="btn btn-primary mt-30">Login</button>
        
      </form>
    )
  }
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'LoginForm',
  validate
})(LoginForm)

export default LoginForm;