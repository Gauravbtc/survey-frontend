import TInvoiceEdit from '../../components/tinvoices/TInvoiceEdit';
import { connect } from 'react-redux';
import { fetchInvoice,fetchInvoiceSuccess,fetchInvoiceFailure,updateInvoice,updateInvoiceSuccess,updateInvoiceFailure,resetInvoiceUpdate } from '../../actions/tinvoices_action';

function mapStateToProps(state){
  return{
    invoiceUpdate: state.invoice.invoiceUpdate,
    loginUser: state.user.loginUser,
    invoiceShow: state.invoice.invoiceShow
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
    updateInvoice: (params) => {
      (dispatch(updateInvoice(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(updateInvoiceSuccess(response.data));
          }
          else{
            dispatch(updateInvoiceFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(updateInvoiceFailure(response.data))
      })
    },
    resetInvoice: () =>{
      dispatch(resetInvoiceUpdate());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TInvoiceEdit)