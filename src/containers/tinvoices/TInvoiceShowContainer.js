import TInvoiceShow from '../../components/tinvoices/TInvoiceShow';
import { connect } from 'react-redux';
import { fetchInvoice,fetchInvoiceSuccess,fetchInvoiceFailure,deleteClaim ,deleteClaimSuccess ,deleteClaimFailure, x12InvoiceUpload,x12InvoiceUploadSuccess,x12InvoiceUploadFailure} from '../../actions/tinvoices_action';



function mapStateToProps(state){
  return{
    invoiceShow: state.invoice.invoiceShow,
    invoiceX12Upload: state.invoice.invoiceX12Upload
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
    deleteClaim: (id,invoice) => {
      (dispatch(deleteClaim(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(deleteClaimSuccess(response.data,invoice));
        }
        else{
          dispatch(deleteClaimFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(deleteClaimFailure(err))
    })  
    },
    invoiceUpload: (id) => {
      (dispatch(x12InvoiceUpload(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(x12InvoiceUploadSuccess(response.data));
        }
        else{
          dispatch(x12InvoiceUploadFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(x12InvoiceUploadFailure(err))
    })  
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TInvoiceShow)