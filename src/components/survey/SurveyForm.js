import React ,{ Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'react-tagsinput/react-tagsinput.css'; 
import QuestionTag from './QuestionTag'; 


const validate = (values) => { 
  const errors = {}
  if(!values.title){
    errors.title = "Title is required"
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

const renderTextArea = ({input, meta: { touched, error, warning }}) => (
  <div>
      <div className="form-group">
          <textarea {...input} placeholder="description" rows="4" cols="60" />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
  </div>
);


class RenderQuestions extends Component {
  
  render(){
    const { fields, change, meta: {  error } } = this.props 
    return(
      <tbody>
        {fields.map((questions_attributes, index) => (
            <tr key = {index} >
            <td>
              <Field
                name ={`${questions_attributes}.title`}
                type="text"
                component={renderField}
                /> 
            </td>
            <td>
              <Field name={`${questions_attributes}.options`} component={QuestionTag} change={change} question_name = {`${questions_attributes}.options`} />
            </td>
            <td>
              <FontAwesome name="trash" className="btn btn-sm btn-danger" 
              onClick={() => {
                fields.remove(index);
              }}/>
            </td>  
          </tr>
          ))}
          <tr>
            <td colSpan="4"> 
              <button type="button" className="btn btn-primary" id="addQuestion" onClick={() => fields.push({})}>Add Question</button>
              {error &&
                    <li className="error">
              {error}
            </li>}
            </td>
          </tr>
      </tbody>    
    );
  }
}



class SurveyForm extends Component{  
  goBack = (props) => {
    this.props.history.goBack();
  }
  
  render(){
    const { handleSubmit, pristine, reset, submitting, survey , change, questions } = this.props
    
      return(
        <div className="container-fluid">
            <div className="panel panel-default">
              <div className="panel-heading">Survey 
                  <div className="pull-right">
                      <button onClick={this.goBack.bind(this)} className="btn btn-primary btn-space">Back</button>
                  </div>
              </div>
              <div className="panel-body">
                <form onSubmit={ handleSubmit }>	
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                            <label>Title <span className="text-danger">*</span> </label>
                            <Field name="title" component={renderField} type="text" label="Title" validate={[required]}/>
                        </div>
                      </div>
                      <div className="col-sm-6">
                          <div className="form-group">
                              <label>Description<span className="text-danger">*</span></label>
                              <Field name="description" component={renderTextArea} type= "textarea" />
                          </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="table-responsive">
                          <table className="table table-striped table-hover table-condensed" cellSpacing="0" cellPadding="4">
                            <thead>
                              <tr>
                                <th className="col-sm-6">Question Title</th>
                                <th className="col-sm-6">Options</th>
                              </tr>
                            </thead>
                            <FieldArray name="questions_attributes" component={RenderQuestions} change = {change}  />
                          </table>
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

SurveyForm = reduxForm({
  // a unique name for the form
  form: 'SurveyForm',
  validate

})(SurveyForm)

export default withRouter (SurveyForm);