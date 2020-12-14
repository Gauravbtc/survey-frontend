import SurveyEdit from '../../components/survey/SurveyEdit';
import { connect } from 'react-redux';
import { fetchSurvey, fetchSurveyFailure ,fetchSurveySuccess, updateSurvey, updateSurveySuccess, updateSurveyFailure,updateSurveyReset } from '../../actions/survey_action';

function mapStateToProps(state){
  return{
    surveyUpdate: state.survey.surveyUpdate,
    loginUser: state.user.loginUser,
    surveyShow: state.survey.surveyShow
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchSurvey: (id) => {
      (dispatch(fetchSurvey(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchSurveySuccess(response.data));
          }
          else{
            dispatch(fetchSurveyFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchSurveyFailure(response.data))
      })
    },
    updateSurvey: (params) => {
      (dispatch(updateSurvey(params)).payload)
        .then((response) => {
          if(response.status === 200 && response.data.success){
            dispatch(updateSurveySuccess(response.data));
          }
          else{
            dispatch(updateSurveyFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(updateSurveyFailure(response.data))
      })
    },
    updateSurveyReset: () =>{
      dispatch(updateSurveyReset());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(SurveyEdit);