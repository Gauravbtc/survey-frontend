import TInvoicePayments from '../../components/tpayments/TInvoicePayments';
import { connect } from 'react-redux';
import { getInvoicePayments, getInvoicePaymentsSuccess,getInvoicePaymentsFailure} from '../../actions/tpayments_action';
//import { setPagination } from '../../actions/pagination_action';

function mapStateToProps(state){
  return{
    invoicePayments: state.payment.invoicePayments,
  }
}

function matchDispatchToProps(dispatch){
  return {
    getInvoicePayments: (id) => {
      (dispatch(getInvoicePayments(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(getInvoicePaymentsSuccess(response.data));
          }
          else{
            dispatch(getInvoicePaymentsFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(getInvoicePaymentsFailure(err))
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TInvoicePayments);