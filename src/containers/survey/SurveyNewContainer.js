import SurveyNew from '../../components/survey/SurveyNew';
import { connect } from 'react-redux';
import { createSurvey, createSurveySuccess, createSurveyFailure, createSurveyReset } from '../../actions/survey_action';


function mapStateToProps(state,ownProps){
  return{
    SurveyNew: state.survey.surveyNew,
    loginUser: state.user.loginUser,
    params: ownProps
  }
}

function matchDispatchToProps(dispatch){
  return {
    surveyNew: (params) => {
      (dispatch(createSurvey(params)).payload)
        .then((response) => {
          if(response.status === 200 && response.data.success ){
            debugger;
            dispatch(createSurveySuccess(response.data));
          }
          else{
            dispatch(createSurveyFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createSurveyFailure(response.data))
      })
    },
    surveyReset: () =>{
      dispatch(createSurveyReset());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(SurveyNew)