import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export function importProduct(file){
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/m_products/import`,
    headers: {'auth_token': localStorage.getItem("user")},
    data: file
  }); 
  return({
    type: "IMPORT_PRODUCT",
    payload: request
  })
}

export function importProductSuccess(data){
  return({
    type: "IMPORT_PRODUCT_SUCESSS",
    payload: data
  })
}

export function importProductFailure(err){
  return({
    type: "IMPORT_PRODUCT_FAILURE",
    payload: err
  })
}

export function importProductReset(){
  return({
    type: "IMPORT_PRODUCT_RESET"
  })
}


export const fetchProducts = (page,params,sortDirection) => {
  const page1 = page? `?page=${page}`: "?page=1"
  const search = params? `&search=${params}`:""
  const sort = sortDirection? `&sort=${sortDirection}`: ""
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/m_products${page1}${search}${sort}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_PRODUCTS",
    payload: request
  }
} 

export const fetchProductsSuccess = (products) =>{
  return{
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products
  }
}

export const fetchProductsFailure = (err) =>{
  return{
    type: "FETCH_PRODUCTS_FAILURE",
    payload: err
  }
}


export const fetchProduct = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/m_products/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_PRODUCT",
    payload: request
  }
} 

export const fetchProductSuccess = (product) =>{
  return{
    type: "FETCH_PRODUCT_SUCCESS",
    payload: product
  }
}


export const fetchProductFailure = (err) =>{
  return{
    type: "FETCH_PRODUCT_FAILURE",
    payload: err
  }
}

export const deleteProduct = (id) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/m_products/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "DELETE_PRODUCT",
    payload: request
  }
}

export const deleteProductSuccess = (id,deletedProduct,productList) =>{
  let product = productList.find(function(product){
    return product.id === id
  })
  productList.splice(productList.indexOf(product),1)

  return{
    type: "DELETE_PRODUCT_SUCCESS",
    payload: deletedProduct,
    products: productList
  }
}

export const deleteProductFailure = (err) =>{
  return{
    type: "DELETE_PRODUCT_FAILURE",
    payload: err
  }
}

export const resetDeleteProduct = (products) =>{
  return{
    type: "RESET_PRODUCT_DELETE",
    payload: products
  }
}


export const createProduct = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/m_products`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_PRODUCT",
    payload: request
  }
}

export const createProductSuccess = (product) =>{
  return {
    type: "CREATE_PRODUCT_SUCCESS",
    payload: product
  }  
}

export const createProductFailure = (err) =>{
  return {
    type: "CREATE_PRODUCT_FAILURE",
    payload: err
  }  
}

export const updateProduct = (params) =>{
  const request = axios({
    method: 'put',
    url: `${appHost}/v1/m_products/${params.m_product.id}`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "UPDATE_PRODUCT",
    payload: request
  }
}

export const updateProductSuccess = (product) =>{
  return {
    type: "UPDATE_PRODUCT_SUCCESS",
    payload: product
  }
}

export const updateProductFailure = (err) =>{
  return {
    type: "UPADTE_PRODUCT_FAILURE",
    payload: err
  }
}

export const updateProductReset = () => {
  return{
    type: "UPDATE_PRODUCT_RESET"
  }
}

export const createProductReset = () => {
  return {
    type: "CREATE_PRODUCT_RESET"
  }
}

export const fetchProductReports = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/m_products/product_report`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "FETCH_PRODUCT_REPORTS",
    payload: request
  }
}

export const fetchProductReportsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCT_REPORTS_SUCCESS",
    payload: products
  }
}

export const fetchProductReportsFailure = (err) => {
  return {
    type: "FETCH_PRODUCT_REPORTS_FAILURE",
    payload: err
  }
}

export const fetchProductReportsReset = () => {
  return {
    type: "FETCH_PRODUCT_REPORTS_RESET"
  }
}



export const fetchProductReturnReports = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/m_products/product_return_report`,
    data: params,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "FETCH_PRODUCT_RETURN_REPORTS",
    payload: request
  }
}

export const fetchProductReturnReportsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCT_RETURN_REPORTS_SUCCESS",
    payload: products
  }
}

export const fetchProductReturnReportsFailure = (err) => {
  return {
    type: "FETCH_PRODUCT_RETURN_REPORTS_FAILURE",
    payload: err
  }
}

export const fetchProductReturnReportsReset = () => {
  return {
    type: "FETCH_PRODUCT_RETURN_REPORTS_RESET"
  }
}

export const deleteProductUpc = (product) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/m_products/destroy_m_product_upc`,
    data: product,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "DELETE_PRODUCT_UPC",
    payload: request
  }  
}

export const deleteProductUpcSuccess = (product) =>{
  return {
    type: "DELETE_PRODUCT_UPC_SUCCESS",
    payload: product
  }  
}

export const deleteProductUpcFailure = (err) =>{
  return {
    type: "DELETE_PRODUCT_UPC_FAILURE",
    payload: err
  }  
}

export const productSorting = (products) => {
  return {
    type: 'PRODUCT_SORT',
    payload: products
  }
}

export const fetchProductListSearch = () =>{
  const request = axios({
    method: 'get',
    url: `${appHost}/v1/m_products/product_serach_list`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "FETCH_PRODUCT_LIST_SEARCH",
    payload: request
  }
}

export const fetchProductListSearchSuccess = (products) =>{
  return {
    type: "FETCH_PRODUCT_LIST_SEARCH_SUCCESS",
    payload: products
  }
}

export const fetchProductListSearchFailure = (err) => {
  return {
    type: "FETCH_PRODUCT_LIST_SEARCH_FAILURE",
    payload: err
  }
}