import TPaymentShow from '../../components/tpayments/TPaymentShow';
import { connect } from 'react-redux';
import { fetchPayment,fetchPaymentSuccess,fetchPaymentFailure} from '../../actions/tpayments_action'

function mapStateToProps(state){
  return{
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
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPaymentShow)