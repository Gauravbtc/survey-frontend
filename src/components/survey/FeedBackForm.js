import React ,{ Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { withRouter } from 'react-router-dom';
import Option from './Option';


// const validate = (values) => { 
//   const errors = {}
//   if(!values.name){
//     errors.title = "Name is required"
//   }

//   if(!values.email) {
//     errors.email = 'Email is required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }


//   return errors
// }

const required = value => (value ? undefined : 'Required')

const renderField = ({input,label,type,meta: { touched, error }}) => {
  console.log("---inside render", input.value)
  return (
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
  )
}

const renderRadioField = ({input,label,type,meta: { touched, error }}) => {
  return (
  <div>
    <div className="form-group">
      {/* <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched &&
        ((error &&
          <span style={{color: "red"}}>
            {label + error}
          </span>))} */}
         {input.value.map((option) => {
           return (
            <>
            <input {...input} type="radio" value={option} className="form-control" checked={input.value === option} />
            <label>{option}</label>
            </>
           ) 
         })}
         
    </div>
  </div>
  )
}

class RenderQuestions extends Component {
  
  render(){
    const { fields, change, meta: {  error } } = this.props
    return(
      <div>
        {fields.map((questions, index) => {
          return (
            <div key = {index} >
            <div className="form-group">
            <label><span className="text-danger">{fields.get(index).title}</span> </label>
            </div>
            <div className="form-group">
                <Field name={`${questions}.options`} component={Option} change={change} options_name = {`${questions}.options`} />
            </div>
          </div>  
        )})}
      </div>  
    );
  }
}

class FeedBackForm extends Component{  
  goBack = (props) => {
    this.props.history.goBack();
  }
  
  render(){
    const { handleSubmit, pristine, reset, submitting , change } = this.props
    // debugger
      return(
        <div className="container-fluid">
            <div className="panel panel-default">
              <div className="panel-heading">FeedBack</div>
              <div className="panel-body">
                <form onSubmit={ handleSubmit }>	
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                            <label><span className="text-danger">{this.props.initialValues.title}</span> </label>
                            <Field name="title" component={renderField} type= "text" label="title" />
                        </div>
                        {/* <div className="form-group">
                            <label>Participant Emais<span className="text-danger">*</span></label>
                            <Field name="email" component={renderField} type= "text" label="Email " validate={[required]} />
                        </div> */}
                      <FieldArray name="questions" component={RenderQuestions} change={change} />  
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

FeedBackForm = reduxForm({
  // a unique name for the form
  form: 'FeedBackForm'
  // validate

})(FeedBackForm)

export default withRouter (FeedBackForm);