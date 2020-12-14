import TSalesOrderReports from '../../components/tsalesorders/TSalesOrderReports';
import { connect } from 'react-redux';
import { feachSalesOrderReports, feachSalesOrderReportsSuccess, feachSalesOrderReportsFailure,feachSalesOrderReportsReset } from '../../actions/tsalesorders_action';

function mapStateToProps(state){
  return{
    orderReports: state.sales_order.orderReports
  }
}

function matchDispatchToProps(dispatch){
  return {
    feachSalesOrderReports: (params) => {
      (dispatch(feachSalesOrderReports(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(feachSalesOrderReportsSuccess(response.data));
          }
          else{
            dispatch(feachSalesOrderReportsFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(feachSalesOrderReportsFailure(err.response.data))
      })
    },
    resetSalesReport: () =>{
      dispatch(feachSalesOrderReportsReset());
    }
  }  
}

export default connect(mapStateToProps,matchDispatchToProps)(TSalesOrderReports)