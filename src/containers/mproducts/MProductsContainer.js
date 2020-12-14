import MProduct from '../../components/mproducts/MProduct';
import { connect } from 'react-redux';
import { fetchProducts, fetchProductsSuccess,fetchProductsFailure,deleteProduct,deleteProductSuccess,deleteProductFailure} from '../../actions/mproducts_action';
import { setPagination } from '../../actions/pagination_action';


function mapStateToProps(state){
  return{
    productList: state.product.productList,
    prevproductList: state.product.prevproductList,
    productDelete: state.product.productDelete
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchProducts: (page,params,sortDirection) => {
      (dispatch(fetchProducts(page,params,sortDirection)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchProductsSuccess(response.data));
          }
          else{
            dispatch(fetchProductsFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchProductsFailure(err.response.data))
      })
    },
    deleteProduct: (id,productList) => {
      (dispatch(deleteProduct(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(deleteProductSuccess(id,response.data,productList));        
        }
        else{
          dispatch(deleteProductFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(deleteProductFailure(err.response.data))
    })  
    },
    setPagination: (data, currentPage, perPage) =>{
      (dispatch(setPagination(data, currentPage, perPage)))
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(MProduct)