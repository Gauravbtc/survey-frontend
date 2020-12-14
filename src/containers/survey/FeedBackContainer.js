import FeedBack from '../../components/survey/FeedBack';
import { connect } from 'react-redux';
import { fetchSurveyQuestion, fetchSurveyQuestionSuccess ,fetchSurveyQuestionFailure } from '../../actions/survey_action';

function mapStateToProps(state){
  return{
    surveyParticipant: state.survey.surveyVerification,
    surveyQuestion: state.survey.surveyQuestion

  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchSurveyQuestion: (params) => {
      (dispatch(fetchSurveyQuestion(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchSurveyQuestionSuccess(response.data));
          }
          else{
            dispatch(fetchSurveyQuestionFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchSurveyQuestionFailure(response.data))
      })
    }
    // updateSurvey: (params) => {
    //   (dispatch(updateSurvey(params)).payload)
    //     .then((response) => {
    //       if(response.status === 200 && response.data.success){
    //         dispatch(updateSurveySuccess(response.data));
    //       }
    //       else{
    //         dispatch(updateSurveyFailure(response.data));
    //       }
    //     })
    //     .catch((response)=>{
    //       dispatch(updateSurveyFailure(response.data))
    //   })
    // },
  //   updateSurveyReset: () =>{
  //     dispatch(updateSurveyReset());
  //   }
   }
}

export default connect(mapStateToProps,matchDispatchToProps)(FeedBack);