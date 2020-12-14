import TBillEdit from '../../components/tbills/TBillEdit';
import { connect } from 'react-redux';
import { fetchBill,fetchBillSuccess,fetchBillFailure,updateBill,updateBillSuccess,updateBillFailure,resetBillUpdate } from '../../actions/tbills_action';

function mapStateToProps(state){
  return{
    billUpdate: state.bill.billUpdate,
    loginUser: state.user.loginUser,
    billShow: state.bill.billShow
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchBill: (id) => {
      (dispatch(fetchBill(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchBillSuccess(response.data));
          }
          else{
            dispatch(fetchBillFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchBillFailure(response.data))
      })
    },
    updateBill: (params) => {
      (dispatch(updateBill(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(updateBillSuccess(response.data));
          }
          else{
            dispatch(updateBillFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(updateBillFailure(response.data))
      })
    },
    resetBillUpdate: () =>{
      dispatch(resetBillUpdate());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TBillEdit);