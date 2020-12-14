import MProductImport from '../../components/mproducts/MProductImport';
import { connect } from 'react-redux';
import { importProduct, importProductSuccess,importProductFailure,importProductReset} from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    impProduct: state.product.impProduct
  }
}

function matchDispatchToProps(dispatch){
  return {
    importProduct: (params) => {
      (dispatch(importProduct(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(importProductSuccess(response.data));
          }
          else{
            dispatch(importProductFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(importProductFailure(response.data))
      })
    },
    importProductReset: () =>{
      dispatch(importProductReset());
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(MProductImport)