import TInvoiceNew from '../../components/tinvoices/TInvoiceNew';
import { connect } from 'react-redux';
import { salesOrderInvoiceItems,salesOrderInvoiceItemsSuccess,salesOrderInvoiceItemsFailure} from '../../actions/tsalesorders_action';
import { createInvoice,createInvoiceSuccess,createInvoiceFailure,createInvoiceReset } from '../../actions/tinvoices_action';

function mapStateToProps(state){
  return{
    orderShow: state.sales_order.invoiceOrderItems,
    invoiceNew: state.invoice.invoiceNew,
    loginUser: state.user.loginUser
  }
}

function matchDispatchToProps(dispatch){
  return {
    salesOrderInvoiceItems: (id) => {
      (dispatch(salesOrderInvoiceItems(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(salesOrderInvoiceItemsSuccess(response.data));
          }
          else{
            dispatch(salesOrderInvoiceItemsFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(salesOrderInvoiceItemsFailure(response.data))
      })
    },
    createInvoice: (params) => {
      (dispatch(createInvoice(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(createInvoiceSuccess(response.data));
          }
          else{
            dispatch(createInvoiceFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createInvoiceFailure(response.data))
      })
    },
    createInvoiceReset: () =>{
      dispatch(createInvoiceReset());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TInvoiceNew)