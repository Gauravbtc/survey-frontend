import TSalesOrderProfitReport from '../../components/tsalesorders/TSalesOrderProfitReport';
import { connect } from 'react-redux';
import { salesOrderProfit, salesOrderProfitSuccess,salesOrderProfitFailure } from '../../actions/tsalesorders_action';

function mapStateToProps(state){
  return{
    orderProfitReports: state.sales_order.orderProfitReports,
    sortDirection: state.sales_order.sortDirectionProfitReports
  }
}

function matchDispatchToProps(dispatch){
  return {
    salesOrderProfit: (params,page) => {
      (dispatch(salesOrderProfit(params,page)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(salesOrderProfitSuccess(response.data,params));
          }
          else{
            dispatch(salesOrderProfitFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(salesOrderProfitFailure(err.response.data))
      })
    }
  }  
}

export default connect(mapStateToProps,matchDispatchToProps)(TSalesOrderProfitReport)