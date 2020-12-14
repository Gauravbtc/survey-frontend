import TPayment from '../../components/tpayments/TPayment';
import { connect } from 'react-redux';
import { fetchPayments, fetchPaymentsSuccess,fetchPaymentsFailure,deletePayment,deletePaymentSuccess,deletePaymentFailure,paymentSorting} from '../../actions/tpayments_action';
import { setPagination } from '../../actions/pagination_action';

function mapStateToProps(state){
  return{
    paymentList: state.payment.paymentList,
    paymentDelete: state.payment.paymentDelete,
    payment_pagination: state.pagination.setPagination,
    paymentListMain: state.payment.paymentListMain
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchPayments: () => {
      (dispatch(fetchPayments()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchPaymentsSuccess(response.data));
          }
          else{
            dispatch(fetchPaymentsFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchPaymentsFailure(err))
      })
    },
    deletePayment: (id,paymentList,currentPage) => {
      (dispatch(deletePayment(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(deletePaymentSuccess(id,response.data,paymentList));
          if(currentPage.currentData.length > 0){
            dispatch(setPagination(paymentList, currentPage.currentPage, currentPage.perPage));
          } 
        }
        else{
          dispatch(deletePaymentFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(deletePaymentFailure(err))
    })  
    },
    paymentSort: (payments,filter_pagination,currentPage) =>{
      if(!filter_pagination){
        dispatch(paymentSorting(payments));
      }
      else if(currentPage.currentData.length > 0){
        dispatch(setPagination(payments, currentPage.currentPage, currentPage.perPage));
      }else{
        dispatch(paymentSorting(payments));
      } 
    }
    
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPayment);