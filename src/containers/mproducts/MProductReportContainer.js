import MProductReports from '../../components/mproducts/MProductReports';
import { connect } from 'react-redux';
import { fetchProductReports,fetchProductReportsSuccess,fetchProductReportsFailure, fetchProductReportsReset } from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    productReport: state.product.productReport
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchProductReports: (params) => {
      (dispatch(fetchProductReports(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchProductReportsSuccess(response.data));
          }
          else{
            dispatch(fetchProductReportsFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchProductReportsFailure(err))
      })
    },
    fetchProductReortsReset: () =>{
      dispatch(fetchProductReportsReset());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(MProductReports);