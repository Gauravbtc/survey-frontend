import TBill from '../../components/tbills/TBill';
import { connect } from 'react-redux';
import { fetchBills, fetchBillsSuccess,fetchBillsFailure,deleteBill,deleteBillSuccess,deleteBillFailure} from '../../actions/tbills_action';
import { setPagination } from '../../actions/pagination_action';

function mapStateToProps(state){
  return{
    billList: state.bill.billList,
    billDelete: state.bill.billDelete,
    bill_pagination: state.pagination.setPagination
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchBills: () => {
      (dispatch(fetchBills()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchBillsSuccess(response.data));
          }
          else{
            dispatch(fetchBillsFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchBillsFailure(err))
      })
    },
    deleteBill: (id,billList,currentPage) => {
      (dispatch(deleteBill(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(deleteBillSuccess(id,response.data,billList));
          if(currentPage.currentData.length > 0){
            dispatch(setPagination(billList, currentPage.currentPage, currentPage.perPage));
          } 
        }
        else{
          dispatch(deleteBillFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(deleteBillFailure(err))
    })  
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TBill);