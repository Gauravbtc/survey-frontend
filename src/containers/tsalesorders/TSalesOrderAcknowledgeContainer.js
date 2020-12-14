import TSalesOrderAcknowledge from '../../components/tsalesorders/TSalesOrderAcknowledge';
import { connect } from 'react-redux';
import { x12SalesOrderAckUpload, x12SalesOrderAckUploadSuccess , x12SalesOrderAckUploadFailure,geOrderStatus,
  geOrderStatusSuccess, geOrderStatusFailure,fetchSalesOrder,fetchSalesOrderSuccess,fetchSalesOrderFailure ,x12SalesOrderAckStatus,x12SalesOrderAckStatusSuccess,x12SalesOrderAckStatusFailure} from '../../actions/tsalesorders_action';

function mapStateToProps(state){
  return{
    orderEdit: state.sales_order.orderShow,
    orderAck: state.sales_order.orderAckX12Upload,
    statusList: state.sales_order.orderStatus,
    orderStatus: state.sales_order.orderStatusChange,
    loginUser: state.user.loginUser
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchSalesOrder: (id) => {
      (dispatch(fetchSalesOrder(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchSalesOrderSuccess(response.data));
          }
          else{
            dispatch(fetchSalesOrderFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchSalesOrderFailure(response.data))
      })
    },
    geOrderStatus: () => {
      (dispatch(geOrderStatus()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(geOrderStatusSuccess(response.data));
          }
          else{
            dispatch(geOrderStatusFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(geOrderStatusFailure(err))
      })
    },

    SalesOrderAckUpload: (id,history) => {
      (dispatch(x12SalesOrderAckUpload(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(x12SalesOrderAckUploadSuccess(response.data));
            history.push(`/sales_orders/show/${response.data.id}`)
          }
          else{
            dispatch(x12SalesOrderAckUploadFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(x12SalesOrderAckUploadFailure(response.data))
      })
    },

    salesOrderAckStatusSave: (params,history) => {
      (dispatch(x12SalesOrderAckStatus(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(x12SalesOrderAckStatusSuccess(response.data));
            history.push(`/sales_orders/show/${response.data.id}`)
          }
          else{
            dispatch(x12SalesOrderAckStatusFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(x12SalesOrderAckStatusFailure(response.data))
      })
    },

    
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TSalesOrderAcknowledge)