import SurveyResult from '../../components/survey/SurveyResult';
import { connect } from 'react-redux';
import { fetchSurveyResult, fetchSurveyResultSuccess, fetchSurveyResultFailure} from '../../actions/survey_action';

function mapStateToProps(state){
  return{
    showSurveyResult: state.survey.showSurveyResult
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchSurveyResult: (id) => {
      (dispatch(fetchSurveyResult(id)).payload)
        .then((response) => {
          if(response.status === 200 && response.data.success ){
            dispatch(fetchSurveyResultSuccess(response.data));
          }
          else{
            dispatch(fetchSurveyResultFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchSurveyResultFailure(response.data))
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(SurveyResult)