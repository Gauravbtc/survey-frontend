import MProductEdit from '../../components/mproducts/MProductEdit';
import { fetchProduct,fetchProductSuccess,fetchProductFailure,updateProduct,updateProductSuccess,updateProductFailure,updateProductReset,deleteProductUpc,deleteProductUpcSuccess,deleteProductUpcFailure } from '../../actions/mproducts_action';
import { connect } from 'react-redux';

function mapStateToProps(state,ownProps){
  return{
    productEdit: state.product.productShow,
    productUpdate: state.product.productUpdate,
    loginUser: state.user.loginUser,
    productUpcDelete: state.product.productUpcDelete
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchProduct: (id) => {
      (dispatch(fetchProduct(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchProductSuccess(response.data));
          }
          else{
            dispatch(fetchProductFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchProductFailure(response.data))
      })
    },
    updateProduct: (params) => {
      (dispatch(updateProduct(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(updateProductSuccess(response.data));
          }
          else{
            dispatch(updateProductFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(updateProductFailure(response.data))
      })
    },
    resetMe: () => {
      dispatch(updateProductReset());
    },
    deleteProductUpc: (params) => {
      (dispatch(deleteProductUpc(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(deleteProductUpcSuccess(response.data));
          }
          else{
            dispatch(deleteProductUpcFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(deleteProductUpcFailure(response.data))
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(MProductEdit)

