import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export function importPayment(file){
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_payments/import`,
    headers: {'auth_token': localStorage.getItem("user")},
    data: file
  }); 
  return({
    type: "IMPORT_PAYMENT",
    payload: request
  })
}

export function importPaymentSuccess(data){
  return({
    type: "IMPORT_PAYMENT_SUCESSS",
    payload: data
  })
}

export function importPaymentFailure(err){
  return({
    type: "IMPORT_PAYMENT_FAILURE",
    payload: err
  })
}

export function importPaymentReset(){
  return({
    type: 'IMPORT_PAYMENT_RESET'
  })
}

export const createPayment = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_payments`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_PAYMENT",
    payload: request
  }
}

export const createPaymentSuccess = (payment) =>{
  return {
    type: "CREATE_PAYMENT_SUCCESS",
    payload: payment
  }
}

export const createPaymentFailure = (err) =>{
  return {
    type: "CREATE_PAYMENT_FAILURE",
    payload: err
  }
}

export const fetchPayment = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_payments/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_PAYMENT",
    payload: request
  }
}
 
export const fetchPaymentSuccess = (payment) =>{
  return{
    type: "FETCH_PAYMENT_SUCCESS",
    payload: payment
  }
}

export const fetchPaymentFailure = (err) =>{
  return{
    type: "FETCH_PAYMENT_FAILURE",
    payload: err
  }
}

export const updatePayment = (params) =>{
  const request = axios({
    method: 'put',
    url: `${appHost}/v1/t_payments/${params.t_payment.id}`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "UPDATE_PAYMENT",
    payload: request
  }
}

export const updatePaymentSuccess = (payment) =>{
  return {
    type: "UPDATE_PAYMENT_SUCCESS",
    payload: payment
  }
}

export const updatePaymentFailure = (err) =>{
  return {
    type: "UPDATE_PAYMENT_FAILURE",
    payload: err
  }
}

export const resetPaymentUpdate = () => {
  return {
    type: "RESET_PAYMENT_UPDATE"
  }
}

export const fetchPayments = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_payments`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_PAYMENTS",
    payload: request
  }
} 

export const fetchPaymentsSuccess = (payments) =>{
  return{
    type: "FETCH_PAYMENTS_SUCCESS",
    payload: payments
  }
}

export const fetchPaymentsFailure = (err) =>{
  return{
    type: "FETCH_PAYMENTS_FAILURE",
    payload: err
  }
}

export const deletePayment = (id) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/t_payments/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "DELETE_PAYMENT",
    payload: request
  }
}

export const deletePaymentSuccess = (id,deletedPayment,paymentList) =>{
  let payment = paymentList.find(function(payment){
    return payment.id === id
  })
  paymentList.splice(paymentList.indexOf(payment),1)
  return{
    type: "DELETE_PAYMENT_SUCCESS",
    payload: deletedPayment,
    payments: paymentList
}
}

export const deletePaymentFailure = (err) =>{
  return{
    type: "DELETE_PAYMENT_FAILURE",
    payload: err
  }
}

export const createPaymentReset = () => {
  return{
    type: "CREATE_PAYMENT_RESET"
  }
}

export const getInvoicePayments = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_payments/${id}/get_payments`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "GET_INVOICE_PAYMENTS",
    payload: request
  }
}

export const getInvoicePaymentsSuccess = (payments) =>{
  return{
    type: "GET_INVOICE_PAYMENTS_SUCCESS",
    payload: payments
  }
}

export const getInvoicePaymentsFailure = (err) =>{
  return{
    type: "GET_INVOICE_PAYMENTS_FAILURE",
    payload: err
  }
}

export const paymentSorting = (payments) => {
  return {
    type: 'PAYMENT_SORT',
    payload: payments
  }
}