import React , { useEffect } from 'react'
import { withRouter } from 'react-router-dom';


const SurveyVerification = (props) =>{
  const { loading, error, success } = props.surveyVerification

  useEffect(() => {  
    if(!success && !loading){
      props.serveyConfirmation(props.match.params.token);
    }

    if(success){
      if(error){
        alert("Some thing went wrong");
      }
      if(props.surveyVerification.participant.questions_answers.length > 0){
        localStorage.setItem("survey_token", props.surveyVerification.participant.survey_token)
        props.history.push("/survey_result/"+ props.surveyVerification.participant.participant_id)
      }else{
        props.history.push('/participant');
      }
    }

  },[success,loading]);

  return false;
}
export default withRouter(SurveyVerification);