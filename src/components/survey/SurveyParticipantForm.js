import React ,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import '../../css/login.css';

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Name is required'
  }
  if(!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
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

class SurveyParticipantForm extends Component{
  render(){
    const { handleSubmit, submitting } = this.props
    return(
      <form onSubmit={ handleSubmit } className="login_signup animated fadeInRight" id="login-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field name="name" component={renderField} type="text"  />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <Field name="email" component={renderField} type="email"  />
        </div>
        <div className="clearfix"></div>
        <button type="submit"  disabled={submitting}  className="btn btn-primary mt-30">Login</button>
      </form>
    )
  }
}

SurveyParticipantForm = reduxForm({
  // a unique name for the form
  form: 'SurveyParticipantForm',
  validate
})(SurveyParticipantForm)

export default SurveyParticipantForm;