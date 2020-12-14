import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export function importPurchaseOrder(file){
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_purchase_orders/import`,
    headers: {'auth_token': localStorage.getItem("user")},
    data: file
  }); 
  return({
    type: "IMPORT_PURCHASE_ORDER",
    payload: request
  })
}

export function importPurchaseOrderSuccess(data){
  return({
    type: "IMPORT_PURCHASE_ORDER_SUCESSS",
    payload: data
  })
}

export function importPurchaseOrderFailure(err){
  return({
    type: "IMPORT_PURCHASE_ORDER_FAILURE",
    payload: err
  })
}

export function importPurchaseOrderReset(){
  return({
    type: 'IMPORT_PURCHASE_ORDER_RESET'
  })
}


export const fetchPurchaseOrders = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_purchase_orders`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_PURCHASE_ORDERS",
    payload: request
  }
} 

export const fetchPurchaseOrdersSuccess = (order) =>{
  return{
    type: "FETCH_PURCHASE_ORDERS_SUCCESS",
    payload: order
  }
}

export const fetchPurchaseOrdersFailure = (err) =>{
  return{
    type: "FETCH_PURCHASE_ORDERS_FAILURE",
    payload: err
  }
}


export const fetchPurchaseOrder = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_purchase_orders/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_PURCHASE_ORDER",
    payload: request
  }
} 

export const fetchPurchaseOrderSuccess = (order) =>{
  return{
    type: "FETCH_PURCHASE_ORDER_SUCCESS",
    payload: order
  }
}


export const fetchPurchaseOrderFailure = (err) =>{
  return{
    type: "FETCH_PURCHASE_ORDER_FAILURE",
    payload: err
  }
}


export const deletePurchaseOrder = (id) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/t_purchase_orders/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "DELETE_PURCHASE_ORDER",
    payload: request
  }
}

export const deletePurchaseOrderSuccess = (id,deletedPurchaseOrder,orderList) =>{
  let order = orderList.find(function(order){
    return order.id === id
  })

  orderList.splice(orderList.indexOf(order),1)
  
  return{
    type: "DELETE_PURCHASE_ORDER_SUCCESS",
    payload: deletedPurchaseOrder,
    products: orderList
  }
}

export const deletePurchaseOrderFailure = (err) =>{
  return{
    type: "DELETE_PURCHASE_ORDER_FAILURE",
    payload: err
  }
}

export const createPurchaseOrder = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_purchase_orders`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_PURCHASE_ORDER",
    payload: request
  }
}

export const createPurchaseOrderSuccess = (purchase_order) =>{
  return {
    type: "CREATE_PURCHASE_ORDER_SUCCESS",
    payload: purchase_order
  }
}

export const createPurchaseOrderFailure = (err) =>{
  return {
    type: "CREATE_PURCHASE_ORDER_FAILURE",
    payload: err
  }
}

export const getSupplierList = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_purchase_orders/supplier_list`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "SUPPLIER_LIST",
    payload: request
  }
}

export const getSupplierListSuccess = (supplier) => {
  return{
    type: "SUPPLIER_LIST_SUCCESS",
    payload: supplier
  }
}

export const getSupplierListFailure = (err) => {
  return {
    type: "SUPPLIER_LIST_FAILURE",
    payload: err
  }
}

export const updatePurchaseOrder = (params) =>{
  const request = axios({
    method: 'put',
    url: `${appHost}/v1/t_purchase_orders/${params.t_purchase_order.id}`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "UPDATE_PURCHASE_ORDER",
    payload: request
  }
}

export const updatePurchaseOrderSuccess = (product) =>{
  return {
    type: "UPDATE_PURCHASE_ORDER_SUCCESS",
    payload: product
  }
}

export const updatePurchaseOrderFailure = (err) =>{
  return {
    type: "UPADTE_PURCHASE_ORDER_FAILURE",
    payload: err
  }
}

export const deletePurchaseOrderProduct = (params) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/t_purchase_orders/destroy_order_item`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "DELETE_PURCHASE_ORDER_PRODUCT",
    payload: request
  }
}

export const deletePurchaseOrderProductSuccess = (product) =>{
  return {
    type: "DELETE_PURCHASE_ORDER_PRODUCT_SUCCESS",
    payload: product
  }
}

export const deletePurchaseOrderProductFailure = (err) =>{
  return {
    type: "DELETE_PURCHASE_ORDER_PRODUCT_FAILURE",
    payload: err
  }
}

export const resetOrderUpdate = () => {
  return {
    type: "RESET_PURCHASE_ORDER_UPDATE"
  }
}

export const resetOrderCreate = () =>{
  return {
    type: "RESET_PURCHASE_ORDER_CREATE"
  }
}

export const purchaseOrderSorting = (orders) => {
  return {
    type: 'PURCHASE_ORDER_SORT',
    payload: orders,
  }
}