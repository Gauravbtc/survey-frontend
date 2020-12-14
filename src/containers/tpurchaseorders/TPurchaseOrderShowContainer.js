import TPurchaseOrderShow from '../../components/tpurchaseorders/TPurchaseOrderShow';
import { connect } from 'react-redux';
import { fetchPurchaseOrder,fetchPurchaseOrderSuccess,fetchPurchaseOrderFailure} from '../../actions/tpurchaseorders_action'

function mapStateToProps(state){
  return{
    orderShow: state.purchase_order.orderShow
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
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPurchaseOrderShow);