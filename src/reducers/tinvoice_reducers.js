const INITIAL_STATE ={
  invoiceNew: {invoice: null,loading: false,success: false,message: null,error: null},
  invoiceShow: {invoice: null, error:null, loading: false,success: false},
  invoiceUpdate: {invoice: null,loading: false,success: false,error: null,message: null},
  invoiceList: {invoices: [], error:null, loading: false,success: false},
  invoiceOriginalList: {invoices: []},
  invoiceDelete: {invoice: null ,loading: false,success: false,error: null ,message: null},
  impInvoice: {error: null, loading: false,message: null,success: false},
  invoiceClaimDelete: {claim: null ,loading: false,success: false,error: null ,message: null},
  invoiceX12Upload: {message: null, loading: false,success: false,error: null},
};

const invoices = (state = INITIAL_STATE, action) => {
  let error;

  switch (action.type) {
    case 'CREATE_INVOICE':
      return {...state, invoiceNew: {invoice: null, error: null, loading: true,message: null,success: false}}
    case 'CREATE_INVOICE_SUCCESS':
      return {...state, invoiceNew: {invoice: action.payload, error: null, loading: false,message: "Invoice created Sucessfully",success: true}}
    case 'CREATE_INVOICE_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, invoiceNew: { invoice: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'CREATE_INVOICE_RESET':
      return {...state, invoiceNew: {invoice: null, error: null, loading: false,message: null,success: false}}
    
    case 'FETCH_INVOICE':
      return {...state, invoiceShow: { invoice: null , error: null, loading: true,success: false}}
    case 'FETCH_INVOICE_SUCCESS':
      return {...state, invoiceShow: { invoice: action.payload , error: null, loading: false,success: true}} 
    case 'FETCH_INVOICE_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, invoiceShow: { invoice: null, error: error, loading: false,success: false}}

    case 'UPDATE_INVOICE':
      return {...state, invoiceUpdate: { invoice: null , error: null, loading: true,success: false,message: null}}
    case 'UPDATE_INVOICE_SUCCESS':
       return {...state, invoiceUpdate: { invoice: action.payload , error: null, loading: false,success: true,message: "Invoice updated Sucessfully"}}
    case 'UPDATE_INVOICE_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, invoiceUpdate: { invoice: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'RESET_INVOICE_UPDATE':
      return {...state, invoiceUpdate: { invoice: null , error: null, loading: false,success: false,message: null}}
    
    case 'FETCH_INVOICES':
      return {...state, invoiceList: { invoices: [], error: null, loading: true,success: false}}
    case 'FETCH_INVOICES_SUCCESS':
      return {...state, invoiceList: { invoices: action.payload, error: null, loading: false,success: true},invoiceOriginalList: {invoices: action.payload}}      
    case 'FETCH_INVOICES_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, invoiceList: { invoices: [], error: error, loading: false,success: action.payload.success}}
    
    case 'DELETE_INVOICE':
      return {...state, invoiceDelete: { invoice: null , error: null, loading: true,success: false,message: null}}
    case 'DELETE_INVOICE_SUCCESS':
      return  {...state,invoiceDelete: {invoice: action.payload.invoice ,loading: false,success: true,message: action.payload.message,error: null}}
    case 'DELETE_INVOICE_FAILURE':  
      error = action.payload || {message: action.payload.error};
      return {...state, invoiceDelete: { invoice: null ,error: error , loading: false,success: false,message: action.payload.message}}
  
    case 'IMPORT_INVOICE':
      return {...state, impInvoice: { error: null, loading: true,message: null,success: false}}
    case 'IMPORT_INVOICE_SUCESSS':
      return {...state, impInvoice: { error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_INVOICE_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, impInvoice: { error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_INVOICE_RESET':
      return {...state, impInvoice: { error: null, loading: false,message: null,success: false}}

    case 'DELETE_CLAIM':
      return {...state, invoiceClaimDelete: { claim: null , error: null, loading: true,success: false,message: null}}
    case 'DELETE_CLAIM_SUCCESS':
      return {...state, invoiceShow: { invoice: action.payload , error: null, loading: false,success: true}, invoiceClaimDelete: { claim: action.claim , error: null, loading: false,success: true,message: "Claim deleted "} } 
    case 'DELETE_CLAIM_FAILURE':  
      error = action.payload || {message: action.payload.error};
      return {...state, invoiceClaimDelete: { claim: null ,error: error , loading: false,success: false,message: action.payload.message}}
  
    case 'X12_INVOICE_UPLOAD':
      return {...state, invoiceX12Upload: { error: null, loading: true,success: false,message: null}}
    case 'X12_INVOICE_UPLOAD_SUCCESS':
      return {...state, invoiceX12Upload: { error: null, loading: false,success: true,message: "Invoice Uploaded Successfully"},invoiceShow: { invoice: action.payload , error: null, loading: false,success: true}}  
    case 'X12_INVOICE_UPLOAD_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, invoiceX12Upload: { error: error, loading: false,success: false,message: action.payload.message}}   
    case 'INVOICE_SORT':
       return {...state, invoiceList: { invoices: action.payload}} 
     
    default: 
      return state;
  }
}

export default invoices;