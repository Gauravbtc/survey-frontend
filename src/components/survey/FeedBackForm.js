import React ,{ Component } from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import { withRouter } from 'react-router-dom'
import Option from './Option'

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
              <div className="panel-heading">{this.props.initialValues.title}</div>
              <div className="panel-body">
                <form onSubmit={ handleSubmit }>	
                    <div className="row">
                      <div className="col-md-6">
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