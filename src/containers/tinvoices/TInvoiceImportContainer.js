import TInvoiceImport from '../../components/tinvoices/TInvoiceImport';
import { connect } from 'react-redux';
import { importInvoice, importInvoiceSuccess,importInvoiceFailure,importInvoiceReset} from '../../actions/tinvoices_action';

function mapStateToProps(state){
  return{
    impInvoice: state.invoice.impInvoice
  }
}

function matchDispatchToProps(dispatch){
  return {
    importInvoice: (params) => {
      (dispatch(importInvoice(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(importInvoiceSuccess(response.data));
          }
          else{
            dispatch(importInvoiceFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(importInvoiceFailure(err.response.data))
      })
    },
    importInvoiceReset: () => {
      (dispatch(importInvoiceReset()));
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TInvoiceImport);