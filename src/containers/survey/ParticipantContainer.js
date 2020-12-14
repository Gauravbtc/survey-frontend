import CreateParticipant from '../../components/survey/CreateParticipant';
import { connect } from 'react-redux';
import { createParticipant, createParticipantSuccess,createParticipantFailure, resetcreateParticipant } from '../../actions/survey_action';


function mapStateToProps(state){
  return{
    newParticipant: state.survey.newParticipant,
    loginUser: state.user.loginUser
    // billDelete: state.bill.billDelete,
    // bill_pagination: state.pagination.setPagination
  }
}

function matchDispatchToProps(dispatch){
  return {
    createParticipant: (params) => {
      (dispatch(createParticipant(params)).payload)
        .then((response) => {
          if(response.status == 200 && response.data.success ){
            dispatch(createParticipantSuccess(response.data));
          }
          else{
            dispatch(createParticipantFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(createParticipantFailure(err))
      })
    },
    resetcreateParticipant: () =>{
      dispatch(resetcreateParticipant());
    }
    
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(CreateParticipant);