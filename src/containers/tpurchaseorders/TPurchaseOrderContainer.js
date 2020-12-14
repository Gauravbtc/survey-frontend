import TPurchaseOrder from '../../components/tpurchaseorders/TPurchaseOrder';
import { connect } from 'react-redux';
import { fetchPurchaseOrders , fetchPurchaseOrdersSuccess, fetchPurchaseOrdersFailure,deletePurchaseOrder,deletePurchaseOrderSuccess,deletePurchaseOrderFailure,purchaseOrderSorting} from '../../actions/tpurchaseorders_action';
import { setPagination } from '../../actions/pagination_action'
function mapStateToProps(state){
  return{
    orderList: state.purchase_order.orderList,
    orderDelete: state.purchase_order.orderDelete,
    order_pagination: state.pagination.setPagination,
    orderListMain: state.purchase_order.ordereListMain
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchPurchaseOrders: () => {
      (dispatch(fetchPurchaseOrders()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchPurchaseOrdersSuccess(response.data));
          }
          else{
            dispatch(fetchPurchaseOrdersFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchPurchaseOrdersFailure(err.response.data))
      })
    },
    deletePurchaseOrder: (id,orderList,currentPage) => {
      (dispatch(deletePurchaseOrder(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(deletePurchaseOrderSuccess(id,response.data,orderList));
          if(currentPage.currentData.length > 0){
            dispatch(setPagination(orderList, currentPage.currentPage, currentPage.perPage));
          } 
        }
        else{
          dispatch(deletePurchaseOrderFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(deletePurchaseOrderFailure(err))
    })  
    },
    purchaseOrderSort: (orders,filter_pagination,currentPage) =>{
      if(!filter_pagination){
        dispatch(purchaseOrderSorting(orders));
      }
      else if(currentPage.currentData.length > 0){
        dispatch(setPagination(orders, currentPage.currentPage, currentPage.perPage));
      }else{
        dispatch(purchaseOrderSorting(orders));
      } 
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPurchaseOrder)