import TClaimReport from '../../components/tclaims/TClaimReport';
import { connect } from 'react-redux';
import { fetchClaimReports,fetchClaimReportsSuccess,fetchClaimReportsFailure,fetchClaimReportsReset } from '../../actions/tclaims_action';

function mapStateToProps(state){
  return{
    claimReport: state.claim.claimReport
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchClaimReports: (params) => {
      (dispatch(fetchClaimReports(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchClaimReportsSuccess(response.data));
          }
          else{
            dispatch(fetchClaimReportsFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchClaimReportsFailure(response.data))
      })
    },
    fetchClaimReportsReset: () =>{
      dispatch(fetchClaimReportsReset());
    }

  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TClaimReport);