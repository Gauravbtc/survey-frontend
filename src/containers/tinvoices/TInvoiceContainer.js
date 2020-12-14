import TInvoice from '../../components/tinvoices/TInvoice';
import { connect } from 'react-redux';
import { fetchInvoices, fetchInvoicesSuccess,fetchInvoicesFailure,deleteInvoice,deleteInvoiceSuccess,deleteInvoiceFailure,invoiceSorting} from '../../actions/tinvoices_action';
import { setPagination } from '../../actions/pagination_action';
function mapStateToProps(state){
  return{
    invoiceList: state.invoice.invoiceList,
    invoiceDelete: state.invoice.invoiceDelete,
    invoice_pagination: state.pagination.setPagination,
    invoice_main_list: state.invoice.invoiceOriginalList
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchInvoices: () => {
      (dispatch(fetchInvoices()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchInvoicesSuccess(response.data));
          }
          else{
            dispatch(fetchInvoicesFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchInvoicesFailure(err))
      })
    },
    deleteInvoice: (id,invoiceList,currentPage) => {
      (dispatch(deleteInvoice(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(deleteInvoiceSuccess(id,response.data,invoiceList));
          if(currentPage.currentData.length > 0){
            dispatch(setPagination(invoiceList, currentPage.currentPage, currentPage.perPage));
          } 
        }
        else{
          dispatch(deleteInvoiceFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(deleteInvoiceFailure(err))
    })  
    },
    invoiceSort: (invoices,filter_pagination,currentPage) =>{
      if(!filter_pagination){
        dispatch(invoiceSorting(invoices));
      }
      else if(currentPage.currentData.length > 0){
        dispatch(setPagination(invoices, currentPage.currentPage, currentPage.perPage));
      }else{
        dispatch(invoiceSorting(invoices));
      } 
    }
    
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TInvoice);