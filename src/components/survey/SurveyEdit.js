import React, { useEffect } from 'react';
import SurveyForm from './SurveyForm';
import Loader from '../../layouts/Loader';

function SurveyEdit(props){
  const { loading, error, success } = props.surveyUpdate
  const { survey } = props.surveyShow
  
  useEffect(() => {  
    if(props.surveyShow && !success){
      var id = props.match.params.id
      props.fetchSurvey(id)
    }
    if(success){
      props.updateSurveyReset()
      props.history.push("/surveys")
    }
    
  },[success]);

  const submit = (values) => {
    props.updateSurvey(values)
  }

  const initialize_new_values = (survey) =>{
    let arrQuestions = [];
    survey.questions.map((survey) => {
      let survey_question = {
        'id': survey.id,
        'title': survey.title,
        'options': survey.options
       };
      return arrQuestions.push(survey_question);
    })

		let formvalues = {
      id: survey.id,
      title: survey.title,
      description: survey.description,
      user_id: survey.user_id,      
      questions_attributes: arrQuestions
    }
     return formvalues;
  }

  const error_message = (error) =>{
    if(error){
      const mssages  = Object.keys(error).map(function (key) {
        return [ <li key={key}> {key} {error[key]} </li> ]
      })

     const msg =  <ul>{mssages}</ul>
    return <div className="alert alert-danger">{msg} </div>}
  }
 
  if(loading){
    return <Loader />
  }
  else if (!survey) {
    return <span />
  }
  else{
    return(
      <main>
        <div className="page-title">
			    <div className="container-fluid">
				    <h1>Edit Survey</h1>
			    </div>
	    	</div>
         {error_message(error)}
         {props.loginUser.user  && <SurveyForm onSubmit={submit} initialValues={initialize_new_values(survey)}/> }       
      </main>
    );
  } 
}

export default SurveyEdit;