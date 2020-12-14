import TPurchaseOrderImport from '../../components/tpurchaseorders/TPurchaseOrderImport';
import { connect } from 'react-redux';
import { importPurchaseOrder, importPurchaseOrderSuccess,importPurchaseOrderFailure,importPurchaseOrderReset} from '../../actions/tpurchaseorders_action'

function mapStateToProps(state){
  return{
    impPurchaseOrder: state.purchase_order.impPurchaseOrder
  }
}

function matchDispatchToProps(dispatch){
  return {
    importPurchaseOrder: (params) => {
      (dispatch(importPurchaseOrder(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(importPurchaseOrderSuccess(response.data));
          }
          else{
            dispatch(importPurchaseOrderFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(importPurchaseOrderFailure(err.response.data))
      })
    },
    importPurchaseOrderReset: () => {
      (dispatch(importPurchaseOrderReset()));
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPurchaseOrderImport)