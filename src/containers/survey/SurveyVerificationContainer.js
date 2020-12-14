import SurveyVerification from '../../components/survey/SurveyVerification'
import { connect } from 'react-redux';
import { serveyConfirmation, serveyConfirmationSuccess,serveyConfirmationFailure } from '../../actions/survey_action';

function mapStateToProps(state){
  return{
    surveyVerification: state.survey.surveyVerification
  }
}

function matchDispatchToProps(dispatch){
  return {
    serveyConfirmation: (token) => {
      (dispatch(serveyConfirmation(token)).payload)
        .then((response) => {
          if(response.status === 200 && response.data.success){
            localStorage.setItem('survey_token', response.data.data.survey_token);
            dispatch(serveyConfirmationSuccess(response.data));
          }
          else{
            dispatch(serveyConfirmationFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(serveyConfirmationFailure(err))
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(SurveyVerification)