import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export const createClaim = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_claims`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_CLAIM",
    payload: request
  }
}

export const createClaimSuccess = (bill) =>{
  return {
    type: "CREATE_CLAIM_SUCCESS",
    payload: bill
  }
}

export const createClaimFailure = (err) =>{
  return {
    type: "CREATE_CLAIM_FAILURE",
    payload: err
  }
}

export const fetchClaim = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_claims/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_CLAIM",
    payload: request
  }
}
 
export const fetchClaimSuccess = (bill) =>{
  return{
    type: "FETCH_CLAIM_SUCCESS",
    payload: bill
  }
}

export const fetchClaimFailure = (err) =>{
  return{
    type: "FETCH_CLAIM_FAILURE",
    payload: err
  }
}

export const updateClaim = (params) =>{
  const request = axios({
    method: 'put',
    url: `${appHost}/v1/t_claims/${params.t_claim.id}`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "UPDATE_CLAIM",
    payload: request
  }
}

export const updateClaimSuccess = (bill) =>{
  return {
    type: "UPDATE_CLAIM_SUCCESS",
    payload: bill
  }
}

export const updateClaimFailure = (err) =>{
  return {
    type: "UPDATE_CLAIM_FAILURE",
    payload: err
  }
}

export const resetClaimUpdate = () => {
  return {
    type: "RESET_CLAIM_UPDATE"
  }
}

export const fetchClaims = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_claims`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_CLAIMS",
    payload: request
  }
} 

export const fetchClaimsSuccess = (claim) =>{
  return{
    type: "FETCH_CLAIMS_SUCCESS",
    payload: claim
  }
}

export const fetchClaimsFailure = (err) =>{
  return{
    type: "FETCH_CLAIMS_FAILURE",
    payload: err
  }
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

export const deleteClaimSuccess = (id,deletedClaim,claimList) =>{
  let claim = claimList.find(function(claim){
    return claim.id === id
  })
  
  claimList.splice(claimList.indexOf(claim),1)
  return{
    type: "DELETE_CLAIM_SUCCESS",
    payload: claim,
  }
}

export const deleteClaimFailure = (err) =>{
  return{
    type: "DELETE_CLAIM_FAILURE",
    payload: err
  }
}

export const createClaimReset = () =>{
  return({
    type: "CREATE_CLAIM_RESET"
  })
}

export function importInvoiceClaim(file){
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_claims/import`,
    headers: {'auth_token': localStorage.getItem("user")},
    data: file
  }); 
  return({
    type: "IMPORT_INVOICE_CLAIM",
    payload: request
  })
}

export function importInvoiceClaimSuccess(data){
  return({
    type: "IMPORT_INVOICE_CLAIM_SUCESSS",
    payload: data
  })
}

export function importInvoiceClaimFailure(err){
  return({
    type: "IMPORT_INVOICE_CLAIM_FAILURE",
    payload: err
  })
}

export function importInvoiceClaimReset(){
  return({
    type: 'IMPORT_INVOICE_CLAIM_RESET'
  })
}

export const fetchClaimReports = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_claims/claim_reports`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "FETCH_CLAIM_REPORTS",
    payload: request
  }
}

export const fetchClaimReportsSuccess = (claims) => {
  return {
    type: "FETCH_CLAIM_REPORTS_SUCCESS",
    payload: claims
  }
}

export const fetchClaimReportsFailure = (err) => {
  return {
    type: "FETCH_CLAIM_REPORTS_FAILURE",
    payload: err
  }
}

export const fetchClaimReportsReset = () => {
  return {
    type: "FETCH_CLAIM_REPORTS_RESET"
  }
}