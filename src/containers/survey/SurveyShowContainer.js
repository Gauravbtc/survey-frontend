import SurveyShow from '../../components/survey/SurveyShow';
import { connect } from 'react-redux';
import { fetchSurvey, fetchSurveySuccess, fetchSurveyFailure} from '../../actions/survey_action';

function mapStateToProps(state){
  return{
    surveyShow: state.survey.surveyShow
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchSurvey: (id) => {
      (dispatch(fetchSurvey(id)).payload)
        .then((response) => {
          if(response.status === 200 && response.data.success ){
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
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(SurveyShow)