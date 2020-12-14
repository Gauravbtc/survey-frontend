import TSalesOrderEdit from '../../components/tsalesorders/TSalesOrderEdit';
import { connect } from 'react-redux';
import { fetchSalesOrder,fetchSalesOrderSuccess,fetchSalesOrderFailure,updateSalesOrder,
  updateSalesOrderSuccess,updateSalesOrderFailure,getBuyerList,
  getBuyerListSuccess, getBuyerListFailure,deleteSalesOrderProduct,deleteSalesOrderProductSuccess,deleteSalesOrderProductFailure, resetOrderUpdate } from '../../actions/tsalesorders_action'
import { fetchProductListSearch, fetchProductListSearchSuccess,fetchProductListSearchFailure} from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    orderEdit: state.sales_order.orderShow,
    orderUpdate: state.sales_order.orderUpdate,
    loginUser: state.user.loginUser,
    productList: state.product.productSearchList,
    buyerList: state.sales_order.buyerList,
    orderProductDelete: state.sales_order.orderProductDelete
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchSalesOrder: (id) => {
      (dispatch(fetchSalesOrder(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchSalesOrderSuccess(response.data));
          }
          else{
            dispatch(fetchSalesOrderFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchSalesOrderFailure(response.data))
      })
    },
    updateProduct: (params) => {
      (dispatch(updateSalesOrder(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(updateSalesOrderSuccess(response.data));
          }
          else{
            dispatch(updateSalesOrderFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(updateSalesOrderFailure(response.data))
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
    deleteSalesOrderProduct: (params) => {
      (dispatch(deleteSalesOrderProduct(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(deleteSalesOrderProductSuccess(response.data));
          }
          else{
            dispatch(deleteSalesOrderProductFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(deleteSalesOrderProductFailure(err))
      })
    },
    resetSalesOrder: () =>{
      dispatch(resetOrderUpdate());     
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TSalesOrderEdit)