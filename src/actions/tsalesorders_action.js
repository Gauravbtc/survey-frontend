import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export function importSalesOrder(file){
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_sales_orders/import`,
    headers: {'auth_token': localStorage.getItem("user")},
    data: file
  }); 
  return({
    type: "IMPORT_SALES_ORDER",
    payload: request
  })
}

export function importSalesOrderSuccess(data){
  return({
    type: "IMPORT_SALES_ORDER_SUCESSS",
    payload: data
  })
}

export function importSalesOrderFailure(err){
  return({
    type: "IMPORT_SALES_ORDER_FAILURE",
    payload: err
  })
}

export function importSalesOrderReset(){
  return({
    type: 'IMPORT_SALES_ORDER_RESET'
  })
}


export const fetchSalesOrders = (sortDirection) => {
  let sort = sortDirection ==="ascending" ? "?sort=asc" : ""
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_sales_orders${sort}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_SALES_ORDERS",
    payload: request
  }
} 

export const fetchSalesOrdersSuccess = (order) =>{
  return{
    type: "FETCH_SALES_ORDERS_SUCCESS",
    payload: order
  }
}

export const fetchSalesOrdersFailure = (err) =>{
  return{
    type: "FETCH_SALES_ORDERS_FAILURE",
    payload: err
  }
}


export const fetchSalesOrder = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_sales_orders/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_SALES_ORDER",
    payload: request
  }
} 

export const fetchSalesOrderSuccess = (order) =>{
  return{
    type: "FETCH_SALES_ORDER_SUCCESS",
    payload: order
  }
}


export const fetchSalesOrderFailure = (err) =>{
  return{
    type: "FETCH_SALES_ORDER_FAILURE",
    payload: err
  }
}


export const deleteSalesOrder = (id) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/t_sales_orders/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "DELETE_SALES_ORDER",
    payload: request
  }
}

export const deleteSalesOrderSuccess = (id,deletedSalesOrder,orderList) =>{
  let order = orderList.find(function(order){
    return order.id === id
  })

  orderList.splice(orderList.indexOf(order),1)
  return{
    type: "DELETE_SALES_ORDER_SUCCESS",
    payload: deletedSalesOrder,
    products: orderList
  }
}

export const deleteSalesOrderFailure = (err) =>{
  return{
    type: "DELETE_SALES_ORDER_FAILURE",
    payload: err
  }
}

export const createSalesOrder = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_sales_orders`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_SALES_ORDER",
    payload: request
  }
}

export const createSalesOrderSuccess = (sales_order) =>{
  return {
    type: "CREATE_SALES_ORDER_SUCCESS",
    payload: sales_order
  }
}

export const createSalesOrderFailure = (err) =>{
  return {
    type: "CREATE_SALES_ORDER_FAILURE",
    payload: err
  }
}

export const getBuyerList = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_sales_orders/buyer_list`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "BUYER_LIST",
    payload: request
  }
}

export const getBuyerListSuccess = (buyer) => {
  return{
    type: "BUYER_LIST_SUCCESS",
    payload: buyer
  }
}

export const getBuyerListFailure = (err) => {
  return {
    type: "BUYER_LIST_FAILURE",
    payload: err
  }
}

export const updateSalesOrder = (params) =>{
  const request = axios({
    method: 'put',
    url: `${appHost}/v1/t_sales_orders/${params.t_sales_order.id}`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "UPDATE_SALES_ORDER",
    payload: request
  }
}

export const updateSalesOrderSuccess = (product) =>{
  return {
    type: "UPDATE_SALES_ORDER_SUCCESS",
    payload: product
  }
}

export const updateSalesOrderFailure = (err) =>{
  return {
    type: "UPADTE_SALES_ORDER_FAILURE",
    payload: err
  }
}

export const deleteSalesOrderProduct = (params) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/t_sales_orders/destroy_order_item`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "DELETE_SALES_ORDER_PRODUCT",
    payload: request
  }
}

export const deleteSalesOrderProductSuccess = (product) =>{
  return {
    type: "DELETE_SALES_ORDER_PRODUCT_SUCCESS",
    payload: product
  }
}

export const deleteSalesOrderProductFailure = (err) =>{
  return {
    type: "DELETE_SALES_ORDER_PRODUCT_FAILURE",
    payload: err
  }
}

export const resetOrderUpdate = () => {
  return {
    type: "RESET_SALES_ORDER_UPDATE"
  }
}

export const resetOrderCreate = () =>{
  return {
    type: "RESET_SALES_ORDER_CREATE"
  }
}

export const feachSalesOrderReports = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_sales_orders/sales_order_reports`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "FEACH_SALES_ORDER_REPORTS",
    payload: request
  }
}

export const feachSalesOrderReportsSuccess = (sales_orders) => {
  return {
    type: "FEACH_SALES_ORDER_REPORTS_SUCCESS",
    payload: sales_orders
  }
}

export const feachSalesOrderReportsFailure = (err) => {
  return {
    type: "FEACH_SALES_ORDER_REPORTS_FAILURE",
    payload: err
  }
}

export const feachSalesOrderReportsReset = () =>{
   return {
    type: "FEACH_SALES_ORDER_REPORTS_RESET"
   }
}

export const syncX12SalesOrders = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_sales_orders/create_x12_sales_order`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "SYNC_X12_SALES_ORDERS",
    payload: request
  }
}


export const syncX12SalesOrdersSuccess = (result) => {
  return {
    type: "SYNC_X12_SALES_ORDERS_SUCCESS",
    payload: result
  }
}


export const syncX12SalesOrdersFailure = (err) => {
  return {
    type: "SYNC_X12_SALES_ORDERS_FAILURE",
    payload: err
  }
}

export const x12SalesOrderAckUpload = (id) => {
  const request = axios({
    method: 'GET',
    url: `${appHost}/v1/t_sales_orders/${id}/sales_order_ack_x12`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "X12_SALES_ORDER_ACK_UPLOAD",
    payload: request
  }
}

export const x12SalesOrderAckUploadSuccess = (result) => {
  return {
    type: "X12_SALES_ORDER_ACK_UPLOAD_SUCCESS",
    payload: result
  }
}

export const x12SalesOrderAckUploadFailure = (err) => {
  return {
    type: "X12_SALES_ORDER_ACK_UPLOAD_FAILURE",
    payload: err
  }
}

export const x12SalesOrderAckStatus = (params) => {
  const request = axios({
    method: 'PUT',
    url: `${appHost}/v1/t_sales_orders/${params.t_sales_order.id}/sales_order_acknowledge`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "X12_SALES_ORDER_ACK_STATUS",
    payload: request
  }
}

export const x12SalesOrderAckStatusSuccess = (result) => {
  return {
    type: "X12_SALES_ORDER_ACK_STATUS_SUCCESS",
    payload: result
  }
}

export const x12SalesOrderAckStatusFailure = (err) => {
  return {
    type: "X12_SALES_ORDER_ACK_STATUS_FAILURE",
    payload: err
  }
}


export const resetx12SalesOrderAckUpload = () => {
  return {
    type: "X12_SALES_ORDER_ACK_UPLOAD_RESET"
  }
}

export const resetx12SalesOrderAckStatus = () => {
  return {
    type: "X12_SALES_ORDER_ACK_STATUS_RESET"
  }
}


export const geOrderStatus = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_sales_orders/get_sales_order_acknowledge_status`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "ORDER_STATUS",
    payload: request
  }
}

export const geOrderStatusSuccess = (buyer) => {
  return{
    type: "ORDER_STATUS_SUCCESS",
    payload: buyer
  }
}

export const geOrderStatusFailure = (err) => {
  return {
    type: "ORDER_STATUS_FAILURE",
    payload: err
  }
}

export const salesOrderSorting = (orders,sortDirection) => {
  return {
    type: 'ORDER_SORT',
    payload: orders,
    sortDirection: sortDirection
  }
}

export const resetSortDirection = (sortDirection) => {
  return{
    type: 'RESET_SORT_DIRECTION',
    payload: sortDirection
  }
}

export const salesOrderProfit = (params) =>{
  const search_params = params && params["start_date"] ? `?search=${JSON.stringify(params)}`: ""
  const sort = params && params["sortDirection"] ? `&sort=${params["sortDirection"]}` : ""
  const page = params && params["page"] ? `&page=${params["page"]}` : `&page=1`

  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_sales_orders/order_profit_report${search_params}${sort}${page}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "ORDER_PROFIT_REPORTS",
    payload: request
  }
}

export const salesOrderProfitSuccess = (orders,params) => {
  return{
    type: 'ORDER_PROFIT_REPORTS_SUCCESS',
    payload: orders,
    sort: params["sortDirection"],
    start_date: params["start_date"],
    end_date: params["end_date"]
  }
}

export const salesOrderProfitFailure = (err) =>{
  return{
    type: 'ORDER_PROFIT_REPORTS_FAILURE',
    payload: err
  }
}

export const salesOrderInvoiceItems = (id) => {
  const request = axios({
    method: 'GET',
    url: `${appHost}/v1/t_sales_orders/${id}/invoice_order_items`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "SALES_ORDER_INVOICE_ITEMS",
    payload: request
  }
}

export const salesOrderInvoiceItemsSuccess = (result) => {
  return {
    type: "SALES_ORDER_INVOICE_ITEMS_SUCCESS",
    payload: result
  }
}

export const salesOrderInvoiceItemsFailure = (err) => {
  return {
    type: "SALES_ORDER_INVOICE_ITEMS_FAILURE",
    payload: err
  }
}