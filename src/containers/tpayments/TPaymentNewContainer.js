import TPaymentNew from '../../components/tpayments/TPaymentNew';
import { connect } from 'react-redux';
import { fetchInvoice,fetchInvoiceSuccess,fetchInvoiceFailure} from '../../actions/tinvoices_action'
import { createPayment,createPaymentSuccess,createPaymentFailure,createPaymentReset } from '../../actions/tpayments_action';

function mapStateToProps(state){
  return{
    invoiceShow: state.invoice.invoiceShow,
    loginUser: state.user.loginUser,
    paymentNew: state.payment.paymentNew
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchInvoice: (id) => {
      (dispatch(fetchInvoice(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchInvoiceSuccess(response.data));
          }
          else{
            dispatch(fetchInvoiceFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchInvoiceFailure(response.data))
      })
    },
    createPayment: (params) => {
      (dispatch(createPayment(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(createPaymentSuccess(response.data));
          }
          else{
            dispatch(createPaymentSuccess(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createPaymentFailure(response.data))
      })
    },
    createPaymentReset: () =>{
      dispatch(createPaymentReset());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPaymentNew);