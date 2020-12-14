import TClaimEdit from '../../components/tclaims/TClaimEdit';
import { connect } from 'react-redux';
import { fetchClaim,fetchClaimSuccess,fetchClaimFailure,updateClaim,updateClaimSuccess,updateClaimFailure,resetClaimUpdate } from '../../actions/tclaims_action';

function mapStateToProps(state){
  return{
    claimUpdate: state.claim.claimUpdate,
    loginUser: state.user.loginUser,
    claimShow: state.claim.claimShow
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchClaim: (id) => {
      (dispatch(fetchClaim(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchClaimSuccess(response.data));
          }
          else{
            dispatch(fetchClaimFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchClaimFailure(response.data))
      })
    },
    updateClaim: (params) => {
      (dispatch(updateClaim(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(updateClaimSuccess(response.data));
          }
          else{
            dispatch(updateClaimFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(updateClaimFailure(response.data))
      })
    },
    resetClaim: () =>{
      dispatch(resetClaimUpdate());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TClaimEdit)