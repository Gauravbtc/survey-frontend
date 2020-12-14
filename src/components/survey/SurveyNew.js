import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import Loader from '../../layouts/Loader';


class SurveyNew extends Component{ 
  
  constructor(props){
    super(props)
    this.state = {
       success: this.props.SurveyNew.success  
    }
  }

  submit = (values) => {
    values["user_id"] = this.props.loginUser.user.id
    this.props.surveyNew(values)
  }

  static getDerivedStateFromProps(props,state){
    if(props.SurveyNew.success !== state.success){
      props.history.push("/survey/show/"+ props.SurveyNew.survey.id)
    }
    return null
  }
  
  error_message(error){
    if(error){
      const mssages  = Object.keys(error).map(function (key) {
        return [ <li key={key}> {key} {error[key]} </li> ]
      })

     const msg =  <ul>{mssages}</ul>
    return <div className="alert alert-danger">{msg} </div>}
  }

  render(){
    const { error, loading } = this.props.SurveyNew
    if(loading) {
      return <Loader />
    }
    return(
      <main>
        <div className="page-title">
			    <div className="container-fluid">
				    <h1>Survey</h1>
			    </div>
	    	</div>
        {this.error_message(error)}
        <SurveyForm onSubmit={this.submit} />
      </main>
    );
  }
}

export default SurveyNew;