import React ,{ Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = (values) => {
  const errors = {}
  if (!values.password) {
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


class NewPasswordForm extends Component{
  componentWillMount() {
    if(this.props.token){
      this.props.initialize({reset_password_token: this.props.token});
    }
  }

  render(){
    const { handleSubmit, submitting } = this.props
    return(
      <form onSubmit={ handleSubmit } className="login_signup animated fadeInRight">
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <Field name="password" component={renderField} type="password"  />
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm Password</label>
          <Field name="password_confirmation" component={renderField} type="password"  />
        </div>
        <div className="clearfix"></div>
        <button type="submit"  disabled={submitting}  className="btn btn-primary mt-30">Submit</button>
    </form>
    )
  }
}
NewPasswordForm = reduxForm({
  // a unique name for the form
  form: 'NewPasswordForm',
  validate
})(NewPasswordForm)

export default NewPasswordForm;