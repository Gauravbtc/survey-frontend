import TPaymentEdit from '../../components/tpayments/TPaymentEdit';
import { connect } from 'react-redux';
import { fetchPayment,fetchPaymentSuccess,fetchPaymentFailure,updatePayment,updatePaymentSuccess,
  updatePaymentFailure,resetPaymentUpdate} from '../../actions/tpayments_action'

function mapStateToProps(state){
  return{
    paymentUpdate: state.payment.paymentUpdate,
    loginUser: state.user.loginUser,
    paymentShow: state.payment.paymentShow
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchPayment: (id) => {
      (dispatch(fetchPayment(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchPaymentSuccess(response.data));
          }
          else{
            dispatch(fetchPaymentFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchPaymentFailure(response.data))
      })
    },
    updatePayment: (params) => {
      (dispatch(updatePayment(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(updatePaymentSuccess(response.data));
          }
          else{
            dispatch(updatePaymentFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(updatePaymentFailure(response.data))
      })
    },
    resetPayment: () =>{
      dispatch(resetPaymentUpdate());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPaymentEdit)