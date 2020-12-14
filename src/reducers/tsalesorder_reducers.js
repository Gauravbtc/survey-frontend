const INITIAL_STATE ={
  impSalesOrder: {error: null, loading: false,message: null,success: false},
  orderList: {orders: [], error:null, loading: false,success: false, message: null,sortDirection: null},
  orderListMain: {orders: []},
  orderShow: {order: null, error:null, loading: false,success: false},
  orderDelete: {order: null ,loading: false,success: false,error: null ,message: null},
  orderNew: {order: null ,loading: false,success: false,error: null ,message: null},
  orderUpdate: {order: null,loading: false,success: false,error: null,message: null},
  orderProductDelete: {product: null,loading: false,success: false,message: null},
  buyerList: {buyers: [], error:null, loading: false,success: false},
  orderReports: {orders: [], error:null, loading: false,success: false},
  syncSalesOrder: {result: [],message: null, loading: false,success: false,error: null},
  orderAckX12Upload: {message: null, loading: false,success: false,error: null},
  orderStatusChange: {message: null, loading: false,success: false,error: null},
  orderStatus: {status: [], error:null, loading: false,success: false},
  sortDirection: {sort: "descending"},
  orderProfitReports: {orders: [],loading: false,message: null, success: false,error: null,page: 0,totalPage: 0,totalProfit: 0,totalSales: 0, totalPurchase: 0,totalProfitPer: 0},
  prevorderProfitReports: {orders: [],page: 0,totalPage: 0,totalProfit: 0,totalSales: 0, totalPurchase: 0,totalProfitPer: 0}, 
  sortDirectionProfitReports: {orders: [],sort: "desc",page: 0,totalPage: 0,totalProfit: 0,totalSales: 0, totalPurchase: 0,totalProfitPer: 0,start_date: null,end_date: null},
  invoiceOrderItems: {order: null, error:null, loading: false,success: false},
  
};

const sales_orders = (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case 'IMPORT_SALES_ORDER':
      return {...state, impSalesOrder: { error: null, loading: true,message: null,success: false}}
    case 'IMPORT_SALES_ORDER_SUCESSS':
      return {...state, impSalesOrder: { error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_SALES_ORDER_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, impSalesOrder: { error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_SALES_ORDER_RESET':
      return {...state, impSalesOrder: { error: null, loading: false,message: null,success: false}}

    case 'FETCH_SALES_ORDERS':
      return {...state, orderList: { orders: [], error: null, loading: true,success: false}} 
    case 'FETCH_SALES_ORDERS_SUCCESS':
      return {...state, orderList: { orders: action.payload.sales_order, error: null, loading: false,success: action.payload.success},orderListMain: {orders: action.payload.sales_order}} 
    case 'FETCH_SALES_ORDERS_FAILURE':
      error = action.payload || {message: action.payload.message};
     return {...state, orderList: { orders: [], error: error, loading: false,success: false}}

    case 'FETCH_SALES_ORDER':
      return {...state, orderShow: { order: null , error: null, loading: true,success: false}}
    case 'FETCH_SALES_ORDER_SUCCESS':
      return {...state, orderShow: { order: action.payload , error: null, loading: false,success: true}}
    case 'FETCH_SALES_ORDER_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, orderShow: { order: null, error: error, loading: false,success: false}}
    
    case 'DELETE_SALES_ORDER':
      return {...state, orderDelete: { order: null , error: null, loading: true,success: false}}
    case 'DELETE_SALES_ORDER_SUCCESS':
      return  {...state,orderDelete: {order: action.payload.order ,loading: false,success: true,message: action.payload.message,error: null}}
    case 'DELETE_SALES_ORDER_FAILURE':
      error = action.payload || {message: action.payload.error};
      return {...state, orderDelete: { order: null ,error: error , loading: false,success: false,message: action.payload.message}}

    case 'CREATE_SALES_ORDER':
      return {...state, orderNew: { order: null , error: null, loading: true,success: false}}
    case 'CREATE_SALES_ORDER_SUCCESS' :
      return  {...state,orderNew: {order: action.payload.order ,loading: false,success: true,message: "Order created",error: null}}
    case 'CREATE_SALES_ORDER_FAILURE':
      error = action.payload || {message: action.payload.error};
      return {...state, orderNew: { order: null ,error: error , loading: false,success: false,message: action.payload.message}}
    case 'RESET_SALES_ORDER_CREATE':
      return {...state, orderNew: { order: null , error: null, loading: false,success: false}}

    case 'BUYER_LIST':
      return {...state, buyerList: { buyers: [], error: null, loading: true,success: false}}
    case 'BUYER_LIST_SUCCESS':
      return {...state, buyerList: { buyers: action.payload, error: null, loading: false,success: true}} 
    case 'BUYER_LIST_FAILURE':
       error = action.payload || {message: action.payload.message};
      return {...state, buyerList: { buyers: [], error: error, loading: false,success: false}}

    case 'UPDATE_SALES_ORDER':
      return {...state, orderUpdate: { order: null , error: null, loading: true,success: false}}
    case 'UPDATE_SALES_ORDER_SUCCESS':
      return  {...state,orderUpdate: {order: action.payload.order ,loading: false,success: true,message: "Order updated",error: null}}
    case 'UPADTE_SALES_ORDER_FAILURE':
      error = action.payload || {message: action.payload.error};
      return {...state, orderUpdate: { order: null ,error: error , loading: false,success: false,message: action.payload.message}} 
    case 'RESET_SALES_ORDER_UPDATE': 
      return {...state, orderUpdate: { order: null , error: null, loading: true,success: false}}
      
    case 'DELETE_SALES_ORDER_PRODUCT':
      return {...state, orderProductDelete: { product: null , loading: true,success: false,message: null}}
    case 'DELETE_SALES_ORDER_PRODUCT_SUCCESS':
      return {...state, orderProductDelete: { product: action.payload ,loading: false,success: false,message: "Product deleted sucessfuly" }}
    case 'DELETE_SALES_ORDER_PRODUCT_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, orderProductDelete: { product: action.payload ,loading: false,success: false,message: error }}
    
    case 'FEACH_SALES_ORDER_REPORTS':
      return {...state, orderReports: { orders: [], error: null, loading: true,success: false}} 
    case 'FEACH_SALES_ORDER_REPORTS_SUCCESS':
      return {...state, orderReports: { orders: action.payload, loading: false,success: true}} 
    case 'FEACH_SALES_ORDER_REPORTS_FAILURE':
      error = action.payload 
      return {...state, orderProductDelete: { product: action.payload ,loading: false,success: false,message: error }}
    case 'FEACH_SALES_ORDER_REPORTS_RESET':
      return {...state, orderReports: { orders: [], error: null, loading: false,success: false}} 

    case 'SYNC_X12_SALES_ORDERS':
      return {...state, orderList: { orders: [], error: null, loading: true,success: false}}  
    case 'SYNC_X12_SALES_ORDERS_SUCCESS':
      return {...state, orderList: { orders: action.payload.sales_order, error: null, loading: false,success: action.payload.success, message: action.payload.message}}
    case 'SYNC_X12_SALES_ORDERS_FAILURE':
      error = action.payload ||{message: action.payload.message};
      return {...state, orderList: { orders: [], error: error, loading: false,success: false, message: action.payload.message? action.payload.message : ""}}
    
    case 'X12_SALES_ORDER_ACK_UPLOAD':
      return {...state, orderAckX12Upload: { error: null, loading: true,success: false,message: null}} 
    case 'X12_SALES_ORDER_ACK_UPLOAD_SUCCESS':
      return {...state, orderAckX12Upload: { error: null, loading: false,success: true,message: "Order Acknowledged"},orderShow: { order: action.payload , error: null, loading: false,success: true}
    } 
    case 'X12_SALES_ORDER_ACK_UPLOAD_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, orderAckX12Upload: { error: error, loading: false,success: false,message: "Erros during Order Acknowledge"}} 
    case 'X12_SALES_ORDER_ACK_UPLOAD_RESET':
      return {...state, orderAckX12Upload: { error: null, loading: false,success: false,message: null}} 
    case 'ORDER_STATUS':
      return {...state, orderStatus: { status: [], error: null, loading: true,success: false}}
    case 'ORDER_STATUS_SUCCESS':
      return {...state, orderStatus: { status: action.payload, error: null, loading: true,
      success: true}} 
    case 'ORDER_STATUS_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, orderStatus: { status: [], error: error, loading: false,success: false}}
    
    case 'X12_SALES_ORDER_ACK_STATUS':
      return {...state, orderStatusChange: { error: null, loading: true,success: false,message: null}}  
    case 'X12_SALES_ORDER_ACK_STATUS_SUCCESS':
      return {...state, orderStatusChange: { error: null, loading: false,success: true,message: "Order  Status Changed"},orderShow: { order: action.payload , error: null, loading: false,success: true}
       }
       
    case 'X12_SALES_ORDER_ACK_STATUS_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, orderStatusChange: { error: error, loading: false,success: false,message: "Erros during order status changes"}}    
    case 'X12_SALES_ORDER_ACK_STATUS_RESET':
      return {...state, orderStatusChange: { error: null, loading: false,success: false,message: null}} 
    case 'ORDER_SORT': 
      return {...state, orderList: { orders: action.payload},sortDirection: {sort: action.sortDirection} } 
    case 'RESET_SORT_DIRECTION':
      return {...state,sortDirection: {sort: action.payload} } 

    case 'ORDER_PROFIT_REPORTS':
      return {...state,orderProfitReports: {orders: [],loading: true,message: null, success: false,page:0,totalPage: 0,totalProfit: 0,totalSales: 0, totalPurchase: 0,totalProfitPer: 0}}
    case 'ORDER_PROFIT_REPORTS_SUCCESS':
      return {...state,orderProfitReports: {orders: action.payload.sales_order,loading: false,message: action.payload.message, success: action.payload.success,page: action.payload.page,totalPage: action.payload.total_pages,totalProfit: action.payload.total_profit,totalSales: action.payload.total_sales,totalPurchase: action.payload.total_purchase,totalProfitPer: action.payload.total_profit_per},
      sortDirectionProfitReports: {orders: action.payload.sales_order,sort: action.sort,page: action.payload.page,totalPage: action.payload.total_pages,totalProfit: action.payload.total_profit,totalSales: action.payload.total_sales,totalPurchase: action.payload.total_purchase,totalProfitPer: action.payload.total_profit_per,start_date: action.start_date,end_date: action.end_date}}
    case 'ORDER_PROFIT_REPORTS_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state,orderProfitReports: {orders: [],loading: false,message: "Errros", success: false,error: error,page: 0,totalPage: 0,totalProfit: 0,totalSales: 0, totalPurchase: 0,totalProfitPer: 0}}
    
    case 'SALES_ORDER_INVOICE_ITEMS':
      return {...state, invoiceOrderItems: { order: null , error: null, loading: true,success: false}}
    case 'SALES_ORDER_INVOICE_ITEMS_SUCCESS':
      return {...state, invoiceOrderItems: { order: action.payload , error: null, loading: false,success: true}}
    case 'SALES_ORDER_INVOICE_ITEMS_FAILURE': 
      error = action.payload || {message: action.payload.message};
      return {...state, invoiceOrderItems: { order: null, error: error, loading: false,success: false}}

    default: 
      return state;
  }
}
export default sales_orders;