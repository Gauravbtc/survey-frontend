import Survey from '../../components/survey/Survey';
import { connect } from 'react-redux';
import { fetchSurveys, fetchSurveysSuccess,fetchSurveysFailure } from '../../actions/survey_action';
// import { setPagination } from '../../actions/pagination_action';

function mapStateToProps(state){
  return{
    surveyList: state.survey.surveyList
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchSurveys: () => {
      (dispatch(fetchSurveys()).payload)
        .then((response) => {
          if(response.status == 200 && response.data.success ){
            dispatch(fetchSurveysSuccess(response.data));
          }
          else{
            dispatch(fetchSurveysFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchSurveysFailure(err))
      })
    }
    // deleteBill: (id,billList,currentPage) => {
    //   (dispatch(deleteBill(id)).payload)
    //   .then((response) => {
    //     if(!response.error && response.status === 200){
    //       dispatch(deleteBillSuccess(id,response.data,billList));
    //       if(currentPage.currentData.length > 0){
    //         dispatch(setPagination(billList, currentPage.currentPage, currentPage.perPage));
    //       } 
    //     }
    //     else{
    //       dispatch(deleteBillFailure(response.data));
    //     }
    //   })
    //   .catch((err)=>{
    //     dispatch(deleteBillFailure(err))
    // })  
    // }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(Survey);