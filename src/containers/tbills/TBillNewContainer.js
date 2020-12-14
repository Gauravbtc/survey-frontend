import TBillNew from '../../components/tbills/TBillNew';
import { connect } from 'react-redux';
import { fetchPurchaseOrder,fetchPurchaseOrderSuccess,fetchPurchaseOrderFailure} from '../../actions/tpurchaseorders_action';
import { createBill,createBillSuccess,createBillFailure,createBillReset } from '../../actions/tbills_action';

function mapStateToProps(state){
  return{
    orderShow: state.purchase_order.orderShow,
    billNew: state.bill.billNew,
    loginUser: state.user.loginUser
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchPurchaseOrder: (id) => {
      (dispatch(fetchPurchaseOrder(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchPurchaseOrderSuccess(response.data));
          }
          else{
            dispatch(fetchPurchaseOrderFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchPurchaseOrderFailure(response.data))
      })
    },
    createBill: (params) => {
      (dispatch(createBill(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(createBillSuccess(response.data));
          }
          else{
            dispatch(createBillFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createBillFailure(response.data))
      })
    },
    billReset: () =>{
      dispatch(createBillReset());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TBillNew)