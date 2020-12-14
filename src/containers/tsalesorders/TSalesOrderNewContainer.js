import TSalesOrderNew from '../../components/tsalesorders/TSalesOrderNew';
import { connect } from 'react-redux';
import { createSalesOrder, createSalesOrderSuccess , createSalesOrderFailure,getBuyerList,
  getBuyerListSuccess, getBuyerListFailure,resetOrderCreate } from '../../actions/tsalesorders_action';
import { fetchProductListSearch, fetchProductListSearchSuccess,fetchProductListSearchFailure} from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    orderNew: state.sales_order.orderNew,
    productList: state.product.productSearchList,
    buyerList: state.sales_order.buyerList,
    loginUser: state.user.loginUser
  }
}


function matchDispatchToProps(dispatch){
  return {
    createSalesOrder: (params) => {
      (dispatch(createSalesOrder(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(createSalesOrderSuccess(response.data));
          }
          else{
            dispatch(createSalesOrderFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createSalesOrderFailure(response.data))
      })
    },
    fetchProducts: () => {
      (dispatch(fetchProductListSearch()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchProductListSearchSuccess(response.data));
          }
          else{
            dispatch(fetchProductListSearchFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchProductListSearchFailure(err.response.data))
      })
    },
    fetchBuyers: () => {
      (dispatch(getBuyerList()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(getBuyerListSuccess(response.data));
          }
          else{
            dispatch(getBuyerListFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(getBuyerListFailure(err))
      })
    },
    resetSalesOrderNew: () =>{
      dispatch(resetOrderCreate()); 
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TSalesOrderNew)