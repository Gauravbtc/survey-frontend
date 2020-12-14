import React ,{ Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'react-tagsinput/react-tagsinput.css'; 
import QuestionTag from './QuestionTag'; 


const validate = (values) => { 
  const errors = {}
  if(!values.name){
    errors.title = "Name is required"
  }

  if(!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }


  return errors
}

const required = value => (value ? undefined : 'Required')

const renderField = ({input,label,type,meta: { touched, error }}) =>
  <div>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched &&
        ((error &&
          <span style={{color: "red"}}>
            {label + error}
          </span>))}
    </div>
  </div>



class ParticipantForm extends Component{  
  goBack = (props) => {
    this.props.history.goBack();
  }
  
  render(){
    const { handleSubmit, pristine, reset, submitting, survey , change } = this.props
    
      return(
        <div className="container-fluid">
            <div className="panel panel-default">
              <div className="panel-heading">Participant 
                  <div className="pull-right">
                      <button onClick={this.goBack.bind(this)} className="btn btn-primary btn-space">Back</button>
                  </div>
              </div>
              <div className="panel-body">
                <form onSubmit={ handleSubmit }>	
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                            <label>Participant Name <span className="text-danger">*</span> </label>
                            <Field name="name" component={renderField} type="text" label="Name " validate={[required]}/>
                        </div>
                        <div className="form-group">
                            <label>Participant Emais<span className="text-danger">*</span></label>
                            <Field name="email" component={renderField} type= "text" label="Email " validate={[required]} />
                        </div>
                      </div>  
                    </div>
                    <div className="panel-footer">
                      <button type="button" className="btn btn-default" disabled={ submitting} onClick={reset}>Cancel</button>
                      <button type="submit" className="btn done-btn btn-primary" disabled={pristine || submitting}>Done</button>
                    </div>  
                </form>
              </div>                  
            </div>						
        </div>
      )
    }
}

ParticipantForm = reduxForm({
  // a unique name for the form
  form: 'ParticipantForm',
  validate

})(ParticipantForm)

export default withRouter (ParticipantForm);