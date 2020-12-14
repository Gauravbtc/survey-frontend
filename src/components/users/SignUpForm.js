import React ,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {}
  if(!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(!values.phone){
    errors.phone = 'Phone number is required'
  }else if(!/^\d{10}$/.test(values.phone)){
    errors.phone = "Invalid Phone No"
  }
  if(!values.first_name) {
    errors.username = 'First name is required'
  }
  if(!values.last_name) {
    errors.username = 'First name is required'
  }
  if(!values.password) {
    errors.password = 'Password is required'
  }

  if(!values.password_confirmation){
    errors.password_confirmation = 'Password confirmation is required'
  }

  if(values.password_confirmation!== values.password){
    errors.password_confirmation = 'Password and Password confirmation are same'
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


class SignUpForm extends Component{
  render(){
    const { handleSubmit, submitting } = this.props
    return(
      <form onSubmit={ handleSubmit } className="login_signup animated fadeInRight">
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <Field name="first_name" component={renderField} type="text"  />
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name</label>
          <Field name="last_name" component={renderField} type="text"  />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <Field name="email" component={renderField} type="email"  />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <Field name="password" component={renderField} type="password"  />
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm Password</label>
          <Field name="password_confirmation" component={renderField} type="password"  />
        </div>
        <button type="submit" disabled={submitting}>Sign In</button>
      </form>
    )
  }
}

SignUpForm = reduxForm({
  // a unique name for the form
  form: 'SignUpForm',
  validate
})(SignUpForm)

export default (SignUpForm);