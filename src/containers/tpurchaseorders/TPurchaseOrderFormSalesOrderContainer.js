import TPurchaseOrderFromSalesOrder from '../../components/tpurchaseorders/TPurchaseOrderFromSalesOrder';
import { connect } from 'react-redux';
import { createPurchaseOrder, createPurchaseOrderSuccess , createPurchaseOrderFailure,getSupplierList,
  getSupplierListSuccess, getSupplierListFailure } from '../../actions/tpurchaseorders_action';
import { fetchSalesOrder,fetchSalesOrderSuccess,fetchSalesOrderFailure} from '../../actions/tsalesorders_action'
import { fetchProductListSearch, fetchProductListSearchSuccess,fetchProductListSearchFailure} from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    orderNew: state.purchase_order.orderNew,
    sales_order: state.sales_order.orderShow,
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
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TPurchaseOrderFromSalesOrder);