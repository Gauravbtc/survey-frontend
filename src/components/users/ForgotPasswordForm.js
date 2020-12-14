import React ,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {}

  if (!values.login) {
    errors.login = 'Email Or Username is required'
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

class ForgotPasswordForm extends Component{
  render(){
    const { handleSubmit, submitting } = this.props
    return(
      <form onSubmit={ handleSubmit } className="login_signup animated fadeInRight">
        <div className="form-group">
          <label htmlFor="name">Email/Username</label>
          <Field name="login" component={renderField} type="text"  />
        </div>
        <div className="clearfix"></div>
        <button type="submit"  disabled={submitting}  className="btn btn-primary mt-30">Submit</button>
      </form>
    )
  }
}
ForgotPasswordForm = reduxForm({
  // a unique name for the form
  form: 'ForgotPasswordForm',
  validate
})(ForgotPasswordForm)

export default ForgotPasswordForm;
