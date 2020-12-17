import React, { useEffect, useState } from 'react';
import FeedBackForm from "./FeedBackForm";
// import SurveyParticipantForm from './SurveyParticipantForm';
import Loader from '../../layouts/Loader';

const FeedBack = (props) =>{
  const { error , loading} = props.surveyParticipant
  const [participant_id, setParticipant] = useState("");
  
  const { survey } = props.surveyQuestion
  const { success } = props.surveyResult
  
  const submit = (values) => {
    let survey_answers = []
    values.questions.map((question) => {
      let qustion_ans = {
        "question_id": question.id,
        "ans": question.options
      }
      return survey_answers.push(qustion_ans);
    })

    let survey_result = {
      "participant_id" :  participant_id,
      "survey_answers": survey_answers
    }

    props.createSurveyResult(survey_result)
    console.log("---", survey_result);
  }

  useEffect(() => { 
    if(props.surveyParticipant.success && !loading){
      let id = props.surveyParticipant.participant.survey_id
      props.fetchSurveyQuestion(id);
      setParticipant(props.surveyParticipant.participant.participant_id)
    }

    if(success){
      debugger;
      console.log("---------", props.surveyResult)
    }

  },[loading,success]);

  const error_message = (error) =>{
    if(error){
      const mssages  = Object.keys(error).map(function (key) {
        return [ <li key={key}> {key} {error[key]} </li> ]
      })

     const msg =  <ul>{mssages}</ul>
      return <div className="alert alert-danger">{msg} </div>
    }
  }

  const initialize_new_values = (survey) =>{
    var arrQuestions = [];
    if(survey && survey.questions.length > 0 ){
      survey.questions.map((survey) => {
        var survey_question = {
          'id': survey.id,
          'title': survey.title,
          'options': survey.options
          };
        return arrQuestions.push(survey_question);
      })

      const formvalues = {
        id: survey.id,
        title: survey.title, 
        questions: arrQuestions
      }
        return formvalues;
      }
  }
  

  if(loading) {
    return <Loader />
  }
  else {
    return(
      <main>
        <div className="page-title">
          <div className="container-fluid">
            <h1>FeedBack</h1>
          </div>
        </div>
        {/* {this.error_message(error)} */}
        { survey && <FeedBackForm onSubmit={submit} initialValues={initialize_new_values(survey)} /> }
      </main>
    );
  }
}

export default FeedBack;