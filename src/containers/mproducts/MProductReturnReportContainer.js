import MProductReturnReport from '../../components/mproducts/MProductReturnReport';
import { connect } from 'react-redux';
import { fetchProductReturnReports,fetchProductReturnReportsSuccess,fetchProductReturnReportsFailure, fetchProductReturnReportsReset } from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    productReturnReport: state.product.productReturnReport
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchProductReturnReports: (params) => {
      (dispatch(fetchProductReturnReports(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchProductReturnReportsSuccess(response.data));
          }
          else{
            dispatch(fetchProductReturnReportsFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchProductReturnReportsFailure(err))
      })
    },
    fetchProductReturnReportsReset: () =>{
      dispatch(fetchProductReturnReportsReset());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(MProductReturnReport);