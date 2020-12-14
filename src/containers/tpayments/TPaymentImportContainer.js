import TPaymentImport from '../../components/tpayments/TPaymentImport';
import { connect } from 'react-redux';
import { importPayment, importPaymentSuccess,importPaymentFailure,importPaymentReset} from '../../actions/tpayments_action';

function mapStateToProps(state){
  return{
    impPayment: state.payment.impPayment
  }
}

function matchDispatchToProps(dispatch){
  return {
    importPayment: (params) => {
      (dispatch(importPayment(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(importPaymentSuccess(response.data));
          }
          else{
            dispatch(importPaymentFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(importPaymentFailure(err.response.data))
      })
    },
    importPaymentReset: () => {
      (dispatch(importPaymentReset()));
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPaymentImport);