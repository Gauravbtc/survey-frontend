import TSalesOrder from '../../components/tsalesorders/TSalesOrder';
import { connect } from 'react-redux';
import { fetchSalesOrders, fetchSalesOrdersSuccess,fetchSalesOrdersFailure,deleteSalesOrder,deleteSalesOrderSuccess,deleteSalesOrderFailure,syncX12SalesOrders,syncX12SalesOrdersSuccess,syncX12SalesOrdersFailure,salesOrderSorting,resetSortDirection} from '../../actions/tsalesorders_action';
import { setPagination } from '../../actions/pagination_action';

function mapStateToProps(state){
  return{
    orderList: state.sales_order.orderList,
    orderDelete: state.sales_order.orderDelete,
    order_pagination: state.pagination.setPagination,
    orderListMain: state.sales_order.orderListMain,
    sortDirection: state.sales_order.sortDirection
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchSalesOrders: (sortDirection) => {
      (dispatch(fetchSalesOrders(sortDirection)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchSalesOrdersSuccess(response.data));
          }
          else{
            dispatch(fetchSalesOrdersFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchSalesOrdersFailure(err.response.data))
      })
    },
    deleteSalesOrder: (id,orderList,currentPage) => {
      (dispatch(deleteSalesOrder(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(deleteSalesOrderSuccess(id,response.data,orderList));
          if(currentPage.currentData.length > 0){
            dispatch(setPagination(orderList, currentPage.currentPage, currentPage.perPage));
          } 
        }
        else{
          dispatch(deleteSalesOrderFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(deleteSalesOrderFailure(err))
    })  
    },
    syncX12SalesOrder: () =>{
      (dispatch(syncX12SalesOrders()).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(syncX12SalesOrdersSuccess(response.data));
        }
        else{
          dispatch(syncX12SalesOrdersFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(syncX12SalesOrdersFailure(err.response.data))
    })
    },
    salesOrderSort: (orders,filter_pagination,currentPage,sortDirection) =>{
      if(!filter_pagination){
        dispatch(salesOrderSorting(orders,sortDirection));
      }
      else if(currentPage.currentData.length > 0){
        dispatch(setPagination(orders, currentPage.currentPage, currentPage.perPage));
        dispatch(resetSortDirection(sortDirection));
      }else{
        dispatch(salesOrderSorting(orders,sortDirection));
      } 
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TSalesOrder)

