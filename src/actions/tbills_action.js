import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export const createBill = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/t_bills`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_BILL",
    payload: request
  }
}

export const createBillSuccess = (bill) =>{
  return {
    type: "CREATE_BILL_SUCCESS",
    payload: bill
  }
}

export const createBillFailure = (err) =>{
  return {
    type: "CREATE_BILL_FAILURE",
    payload: err
  }
}

export const fetchBill = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_bills/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_BILL",
    payload: request
  }
}
 
export const fetchBillSuccess = (bill) =>{
  return{
    type: "FETCH_BILL_SUCCESS",
    payload: bill
  }
}

export const fetchBillFailure = (err) =>{
  return{
    type: "FETCH_BILL_FAILURE",
    payload: err
  }
}

export const updateBill = (params) =>{
  const request = axios({
    method: 'put',
    url: `${appHost}/v1/t_bills/${params.id}`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "UPDATE_BILL",
    payload: request
  }
}

export const updateBillSuccess = (bill) =>{
  return {
    type: "UPDATE_BILL_SUCCESS",
    payload: bill
  }
}

export const updateBillFailure = (err) =>{
  return {
    type: "UPDATE_BILL_FAILURE",
    payload: err
  }
}

export const resetBillUpdate = () => {
  return {
    type: "RESET_BILL_UPDATE"
  }
}

export const fetchBills = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/t_bills`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_BILLS",
    payload: request
  }
} 

export const fetchBillsSuccess = (bill) =>{
  return{
    type: "FETCH_BILLS_SUCCESS",
    payload: bill
  }
}

export const fetchBillsFailure = (err) =>{
  return{
    type: "FETCH_BILLS_FAILURE",
    payload: err
  }
}

export const deleteBill = (id) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/t_bills/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "DELETE_BILL",
    payload: request
  }
}

export const deleteBillSuccess = (id,deletedBill,billList) =>{
  let bill = billList.find(function(bill){
    return bill.id === id
  })
  
  billList.splice(billList.indexOf(bill),1)
  return{
    type: "DELETE_BILL_SUCCESS",
    payload: deletedBill,
    bills: billList
  }
}

export const deleteBillFailure = (err) =>{
  return{
    type: "DELETE_BILL_FAILURE",
    payload: err
  }
}

export const createBillReset = () =>{
  return({
    type: "CREATE_BILL_RESET"
  })
}
