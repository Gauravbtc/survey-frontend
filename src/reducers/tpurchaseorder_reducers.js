const INITIAL_STATE ={
  impPurchaseOrder: {error: null, loading: false,message: null,success: false},
  orderList: {orders: [], error:null, loading: false,success: false},
  ordereListMain: {orders: []},
  orderShow: {order: null, error:null, loading: false,success: false},
  orderDelete: {order: null ,loading: false,success: false,message: null},
  orderNew: {order: null ,loading: false,success: false,error: null ,message: null},
  orderUpdate: {order: null,loading: false,success: false,error: null,message: null},
  orderProductDelete: {product: null,loading: false,success: false,message: null},
  supplierList: {supplier: [], error:null, loading: false,success: false}
};

const purchase_orders = (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case 'IMPORT_PURCHASE_ORDER':
      return {...state, impPurchaseOrder: { error: null, loading: true,message: null,success: false}}
    case 'IMPORT_PURCHASE_ORDER_SUCESSS':
      return {...state, impPurchaseOrder: { error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_PURCHASE_ORDER_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, impPurchaseOrder: { error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_PURCHASE_ORDER_RESET':
      return {...state, impPurchaseOrder: { error: null, loading: false,message: null,success: false}}
    
    case 'FETCH_PURCHASE_ORDERS':
      return {...state, orderList: { orders: [], error: null, loading: true,success: false}} 
    case 'FETCH_PURCHASE_ORDERS_SUCCESS':
      return {...state, orderList: { orders: action.payload.purchase_order, error: null, loading: false,success: action.payload.success},ordereListMain: {orders: action.payload.purchase_order}} 
    case 'FETCH_PURCHASE_ORDERS_FAILURE':
      error = action.payload || {message: action.payload.message};
     return {...state, orderList: { orders: [], error: error, loading: false,success: false}}
    
    case 'FETCH_PURCHASE_ORDER':
      return {...state, orderShow: { order: null , error: null, loading: true,success: false}}
    case 'FETCH_PURCHASE_ORDER_SUCCESS':
      return {...state, orderShow: { order: action.payload , error: null, loading: false,success: true}}
    case 'FETCH_PURCHASE_ORDER_FAILURE':
      error = action.payload || {message: action.payload.message};
     return {...state, orderShow: { order: null, error: error, loading: false,success: false}}
   
    case 'DELETE_PURCHASE_ORDER':
      return {...state, orderDelete: { order: null , error: null, loading: true,success: false}}
    case 'DELETE_PURCHASE_ORDER_SUCCESS':
      return  {...state,orderDelete: {order: action.payload.order ,loading: false,success: true,message: action.payload.message}}
    case 'DELETE_PURCHASE_ORDER_FAILURE':
      error = action.payload || {message: action.payload.error};
      return {...state, orderDelete: { order: null ,error: error , loading: false,success: false,message: action.payload.message}}
    
    case 'CREATE_PURCHASE_ORDER':
      return {...state, orderNew: { order: null , error: null, loading: true,success: false}}
    case 'CREATE_PURCHASE_ORDER_SUCCESS' :
      return  {...state,orderNew: {order: action.payload.order ,loading: false,success: true,message: "Order created",error: null}}
    case 'CREATE_PURCHASE_ORDER_FAILURE':
      error = action.payload || {message: action.payload.error};
      return {...state, orderNew: { order: null ,error: error , loading: false,success: false,message: action.payload.message}}
    case 'RESET_PURCHASE_ORDER_CREATE':
      return {...state, orderNew: { order: null , error: null, loading: false,success: false}}

    case 'SUPPLIER_LIST':
      return {...state, supplierList: { supplier: [], error: null, loading: true,success: false}}
    case 'SUPPLIER_LIST_SUCCESS':
      return {...state, supplierList: { supplier: action.payload, error: null, loading: false,success: true}} 
    case 'SUPPLIER_LIST_FAILURE':
       error = action.payload || {message: action.payload.message};
      return {...state, supplierList: { supplier: [], error: error, loading: false,success: false}}

    case 'UPDATE_PURCHASE_ORDER':
      return {...state, orderUpdate: { order: null , error: null, loading: true,success: false}}
    case 'UPDATE_PURCHASE_ORDER_SUCCESS':
      return  {...state,orderUpdate: {order: action.payload.order ,loading: false,success: true,message: "Order updated",error: null}}
    case 'UPADTE_PURCHASE_ORDER_FAILURE':
      error = action.payload || {message: action.payload.error};
      return {...state, orderUpdate: { order: null ,error: error , loading: false,success: false,message: action.payload.message}} 
    case 'RESET_PURCHASE_ORDER_UPDATE': 
      return {...state, orderUpdate: { order: null , error: null, loading: true,success: false}}  
  
    case 'DELETE_PURCHASE_ORDER_PRODUCT':
      return {...state, orderProductDelete: { product: null , loading: true,success: false,message: null}}
    case 'DELETE_PURCHASE_ORDER_PRODUCT_SUCCESS':
      return {...state, orderProductDelete: { product: action.payload ,loading: false,success: false,message: "Product deleted sucessfuly" }}
    case 'DELETE_PURCHASE_ORDER_PRODUCT_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, orderProductDelete: { product: action.payload ,loading: false,success: false,message: error }}
    
    case 'PURCHASE_ORDER_SORT':  
      return {...state, orderList: { orders: action.payload}} 
    default: 
      return state;
  }
}
export default purchase_orders;