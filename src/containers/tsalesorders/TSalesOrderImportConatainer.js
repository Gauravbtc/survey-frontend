import TSalesOrderImport from '../../components/tsalesorders/TSalesOrderImport';
import { connect } from 'react-redux';
import { importSalesOrder, importSalesOrderSuccess,importSalesOrderFailure,importSalesOrderReset} from '../../actions/tsalesorders_action';

function mapStateToProps(state){
  return{
    impSalesOrder: state.sales_order.impSalesOrder
  }
}

function matchDispatchToProps(dispatch){
  return {
    importSalesOrder: (params) => {
      (dispatch(importSalesOrder(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(importSalesOrderSuccess(response.data));
          }
          else{
            dispatch(importSalesOrderFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(importSalesOrderFailure(err.response.data))
      })
    },
    importSalesOrderReset: () => {
      (dispatch(importSalesOrderReset()));
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TSalesOrderImport)