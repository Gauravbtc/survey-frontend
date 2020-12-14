import TPurchaseOrderNew from '../../components/tpurchaseorders/TPurchaseOrderNew';
import { connect } from 'react-redux';
import { createPurchaseOrder, createPurchaseOrderSuccess , createPurchaseOrderFailure,getSupplierList,
  getSupplierListSuccess, getSupplierListFailure,resetOrderCreate } from '../../actions/tpurchaseorders_action';
import { fetchProductListSearch, fetchProductListSearchSuccess,fetchProductListSearchFailure} from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    orderNew: state.purchase_order.orderNew,
    productList: state.product.productSearchList,
    supplierList: state.purchase_order.supplierList,
    loginUser: state.user.loginUser
  }
}

function matchDispatchToProps(dispatch){
  return {
    createPurchaseOrder: (params) => {
      (dispatch(createPurchaseOrder(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(createPurchaseOrderSuccess(response.data));
          }
          else{
            dispatch(createPurchaseOrderFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createPurchaseOrderFailure(response.data))
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
    fetchSuppliers: () => {
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
    resetPurchaseOrderNew: () =>{
      dispatch(resetOrderCreate()); 
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPurchaseOrderNew)