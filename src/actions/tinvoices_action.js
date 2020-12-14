import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export const createInvoice = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_invoices`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_INVOICE",
    payload: request
  }
}

export const createInvoiceSuccess = (invoice) =>{
  return {
    type: "CREATE_INVOICE_SUCCESS",
    payload: invoice
  }
}

export const createInvoiceFailure = (err) =>{
  return {
    type: "CREATE_INVOICE_FAILURE",
    payload: err
  }
}

export const fetchInvoice = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_invoices/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_INVOICE",
    payload: request
  }
}
 
export const fetchInvoiceSuccess = (invoice) =>{
  return{
    type: "FETCH_INVOICE_SUCCESS",
    payload: invoice
  }
}

export const fetchInvoiceFailure = (err) =>{
  return{
    type: "FETCH_INVOICE_FAILURE",
    payload: err
  }
}

export const updateInvoice = (params) =>{
  const request = axios({
    method: 'put',
    url: `${appHost}/v1/t_invoices/${params.t_invoice.id}`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "UPDATE_INVOICE",
    payload: request
  }
}

export const updateInvoiceSuccess = (invoice) =>{
  return {
    type: "UPDATE_INVOICE_SUCCESS",
    payload: invoice
  }
}

export const updateInvoiceFailure = (err) =>{
  return {
    type: "UPDATE_INVOICE_FAILURE",
    payload: err
  }
}

export const resetInvoiceUpdate = () => {
  return {
    type: "RESET_INVOICE_UPDATE"
  }
}

export const fetchInvoices = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_invoices`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_INVOICES",
    payload: request
  }
} 

export const fetchInvoicesSuccess = (invoice) =>{
  return{
    type: "FETCH_INVOICES_SUCCESS",
    payload: invoice
  }
}

export const fetchInvoicesFailure = (err) =>{
  return{
    type: "FETCH_INVOICES_FAILURE",
    payload: err
  }
}

export const deleteInvoice = (id) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/t_invoices/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "DELETE_INVOICE",
    payload: request
  }
}

export const deleteInvoiceSuccess = (id,deletedInvoice,invoiceList) =>{
  let invoice = invoiceList.find(function(invoice){
    return invoice.id === id
  })
  invoiceList.splice(invoiceList.indexOf(invoice),1)
  return{
    type: "DELETE_INVOICE_SUCCESS",
    payload: deletedInvoice,
    products: invoiceList
  }
}

export const deleteInvoiceFailure = (err) =>{
  return{
    type: "DELETE_INVOICE_FAILURE",
    payload: err
  }
}

export function importInvoice(file){
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_invoices/import`,
    headers: {'auth_token': localStorage.getItem("user")},
    data: file
  }); 
  return({
    type: "IMPORT_INVOICE",
    payload: request
  })
}

export function importInvoiceSuccess(data){
  return({
    type: "IMPORT_INVOICE_SUCESSS",
    payload: data
  })
}

export function importInvoiceFailure(err){
  return({
    type: "IMPORT_INVOICE_FAILURE",
    payload: err
  })
}

export function importInvoiceReset(){
  return({
    type: 'IMPORT_INVOICE_RESET'
  })
}

export const createInvoiceReset = () =>{
  return({
    type: 'CREATE_INVOICE_RESET'
  })
}

export const deleteClaim = (id) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/t_claims/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "DELETE_CLAIM",
    payload: request
  }
}

export const deleteClaimSuccess = (claimId,invoice) =>{
  let claim = invoice.t_claims.find(function(claim){
    return claim.id === claimId.claim.id
  })
  
  invoice.t_claims.splice(invoice.t_claims.indexOf(claim),1);

  return{
    type: "DELETE_CLAIM_SUCCESS",
    payload: invoice,
    claim: claim
  }
}

export const deleteClaimFailure = (err) =>{
  return{
    type: "DELETE_CLAIM_FAILURE",
    payload: err
  }
}

export const x12InvoiceUpload = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_invoices/${id}/create_x12_invoice`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "X12_INVOICE_UPLOAD",
    payload: request
  }
}

export const x12InvoiceUploadSuccess = (result) => {
  return {
    type: "X12_INVOICE_UPLOAD_SUCCESS",
    payload: result
  }
}

export const x12InvoiceUploadFailure = (err) => {
  return {
    type: "X12_INVOICE_UPLOAD_FAILURE",
    payload: err
  }
}

export const invoiceSorting = (invoices) => {
  return {
    type: 'INVOICE_SORT',
    payload: invoices,
  }
}