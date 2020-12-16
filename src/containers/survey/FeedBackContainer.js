import FeedBack from '../../components/survey/FeedBack';
import { connect } from 'react-redux';
import { fetchSurveyQuestion, fetchSurveyQuestionSuccess ,fetchSurveyQuestionFailure, createSurveyResult, createSurveyResultSuccess, createSurveyResultFailure } from '../../actions/survey_action';

function mapStateToProps(state){
  return{
    surveyParticipant: state.survey.surveyVerification,
    surveyQuestion: state.survey.surveyQuestion,
    surveyResult: state.survey.surveyResult

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
    },
    createSurveyResult: (params) => {
      (dispatch(createSurveyResult(params)).payload)
        .then((response) => {
          if(response.status === 200 && response.data.success){
            dispatch(createSurveyResultSuccess(response.data));
          }
          else{
            dispatch(createSurveyResultFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createSurveyResultFailure(response.data))
      })
    }
  //   updateSurveyReset: () =>{
  //     dispatch(updateSurveyReset());
  //   }
   }
}

export default connect(mapStateToProps,matchDispatchToProps)(FeedBack);