import TSalesOrderShow from '../../components/tsalesorders/TSalesOrderShow';
import { connect } from 'react-redux';
import { fetchSalesOrder,fetchSalesOrderSuccess,fetchSalesOrderFailure,x12SalesOrderAckUpload,x12SalesOrderAckUploadSuccess,x12SalesOrderAckUploadFailure,resetx12SalesOrderAckUpload,resetx12SalesOrderAckStatus} from '../../actions/tsalesorders_action'
import TPurchaseOrderFromSalesOrder from '../../components/tpurchaseorders/TPurchaseOrderFromSalesOrder';
function mapStateToProps(state){
  return{
    orderShow: state.sales_order.orderShow,
    productShow: state.product.productShow,
    order_ack: state.sales_order.orderAckX12Upload,
    order_ack_status: state.sales_order.orderStatusChange

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
    orderAckUpload: (id) => {
      (dispatch(x12SalesOrderAckUpload(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(x12SalesOrderAckUploadSuccess(response.data));
        }
        else{
          dispatch(x12SalesOrderAckUploadFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(x12SalesOrderAckUploadFailure(err))
    })  
    },
    resetSalesOrderAck: () =>{
      dispatch(resetx12SalesOrderAckUpload()); 
      dispatch(resetx12SalesOrderAckStatus());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TSalesOrderShow,TPurchaseOrderFromSalesOrder)