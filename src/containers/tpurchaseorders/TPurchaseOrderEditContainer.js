import TPurchaseOrderEdit from '../../components/tpurchaseorders/TPurchaseOrderEdit';
import { connect } from 'react-redux';
import { fetchPurchaseOrder,fetchPurchaseOrderSuccess,fetchPurchaseOrderFailure,updatePurchaseOrder,
  updatePurchaseOrderSuccess,updatePurchaseOrderFailure,getSupplierList,
  getSupplierListSuccess, getSupplierListFailure,deletePurchaseOrderProduct,deletePurchaseOrderProductSuccess,deletePurchaseOrderProductFailure, resetOrderUpdate } from '../../actions/tpurchaseorders_action'
import { fetchProductListSearch, fetchProductListSearchSuccess,fetchProductListSearchFailure} from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    orderEdit: state.purchase_order.orderShow,
    orderUpdate: state.purchase_order.orderUpdate,
    loginUser: state.user.loginUser,
    productList: state.product.productSearchList,
    supplierList: state.purchase_order.supplierList,
    orderProductDelete: state.purchase_order.orderProductDelete
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchPurchaseOrder: (id) => {
      (dispatch(fetchPurchaseOrder(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchPurchaseOrderSuccess(response.data));
          }
          else{
            dispatch(fetchPurchaseOrderFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchPurchaseOrderFailure(response.data))
      })
    },
    updateProduct: (params) => {
      (dispatch(updatePurchaseOrder(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(updatePurchaseOrderSuccess(response.data));
          }
          else{
            dispatch(updatePurchaseOrderFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(updatePurchaseOrderFailure(response.data))
      })
    },
    fetchProducts: () => {
      (dispatch(fetchProductListSearch()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchProductListSearchSuccess(response.data));
          }
          else{
            dispatch(fetchProductListSearchSuccess(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchProductListSearchFailure(err.response.data))
      })
    },
    fetchSupplier: () => {
      (dispatch(getSupplierList()).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(getSupplierListSuccess(response.data));
          }
          else{
            dispatch(getSupplierListFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(getSupplierListFailure(err))
      })
    },
    deletePurchaseOrderProduct: (params) => {
      (dispatch(deletePurchaseOrderProduct(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(deletePurchaseOrderProductSuccess(response.data));
          }
          else{
            dispatch(deletePurchaseOrderProductFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(deletePurchaseOrderProductFailure(err))
      })
    },
    resetPurchaseOrder: () =>{
      dispatch(resetOrderUpdate());     
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPurchaseOrderEdit)