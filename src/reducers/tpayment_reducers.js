const INITIAL_STATE ={
  impPayment: {error: null, loading: false,message: null,success: false},
  paymentList: {payments: [], error:null, loading: false,success: false},
  paymentListMain: {payments: []},
  paymentDelete: {payment: null ,loading: false,success: false,error: null ,message: null},
  paymentShow: {payment: null, error:null, loading: false,success: false},
  paymentNew: {payment: null,loading: false,success: false,message: null,error: null},
  paymentUpdate: {payment: null,loading: false,success: false,error: null,message: null},
  invoicePayments: {payments: [], message: null, loading: false,success: false}
};

const payments = (state = INITIAL_STATE, action) => {
  let error;

  switch (action.type) {
    case 'IMPORT_PAYMENT':
      return {...state, impPayment: { error: null, loading: true,message: null,success: false}}
    case 'IMPORT_PAYMENT_SUCESSS':
      return {...state, impPayment: { error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_PAYMENT_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, impPayment: { error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_PAYMENT_RESET':
      return {...state, impPayment: { error: null, loading: false,message: null,success: false}}

    case 'FETCH_PAYMENTS':
      return {...state, paymentList: { payments: [], error: null, loading: true,success: false}}
    case 'FETCH_PAYMENTS_SUCCESS':
      return {...state, paymentList: { payments: action.payload, error: null, loading: false,success: true},paymentListMain: {payments: action.payload}}      
    case 'FETCH_PAYMENTS_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, paymentList: { payments: [], error: error, loading: false,success: action.payload.success}}
      
    case 'DELETE_PAYMENT':
      return {...state, paymentDelete: { payment: null , error: null, loading: true,success: false,message: null}}
    case 'DELETE_PAYMENT_SUCCESS':
      return  {...state,paymentDelete: {payment: action.payload.payment ,loading: false,success: true,message: action.payload.message,error: null}}
    case 'DELETE_PAYMENT_FAILURE':  
      error = action.payload || {message: action.payload.error};
      return {...state, paymentDelete: { payment: null ,error: error , loading: false,success: false,message: action.payload.message}}
  
    case 'CREATE_PAYMENT':
      return {...state, paymentNew: {payment: null, error: null, loading: true,message: null,success: false}}
    case 'CREATE_PAYMENT_SUCCESS':
      return {...state, paymentNew: {payment: action.payload, error: null, loading: false,message: "payment created Sucessfully",success: true}}
    case 'CREATE_PAYMENT_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, paymentNew: { payment: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'CREATE_PAYMENT_RESET':
      return {...state, paymentNew: {payment: null, error: null, loading: false,message: null,success: false}}

    case 'FETCH_PAYMENT':
      return {...state, paymentShow: { payment: null , error: null, loading: true,success: false}}
    case 'FETCH_PAYMENT_SUCCESS':
      return {...state, paymentShow: { payment: action.payload , error: null, loading: false,success: true}} 
    case 'FETCH_PAYMENT_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, paymentShow: { payment: null, error: error, loading: false,success: false}}
    
    case 'UPDATE_PAYMENT':
      return {...state, paymentUpdate: { payment: null , error: null, loading: true,success: false,message: null}}
    case 'UPDATE_PAYMENT_SUCCESS':
       return {...state, paymentUpdate: { payment: action.payload , error: null, loading: false,success: true,message: "payment updated Sucessfully"}}
    case 'UPDATE_PAYMENT_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, paymentUpdate: { payment: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'RESET_PAYMENT_UPDATE':
      return {...state, paymentUpdate: { payment: null , error: null, loading: false,success: false,message: null}}
      
    case 'GET_INVOICE_PAYMENTS':
      return {...state, invoicePayments: { payments: null , message: null, loading: true,success: false}}
    case 'GET_INVOICE_PAYMENTS_SUCCESS':
       return {...state, invoicePayments: { payments: action.payload ,loading: false,success: true,message: "payments found"}}
       
    case 'GET_INVOICE_PAYMENTS_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, invoicePayments: { payments: null, loading: false,message: action.payload.message,success: action.payload.success}}

    case 'PAYMENT_SORT':
       return {...state, paymentList: { payments: action.payload}} 
    default: 
      return state;
  }
}

export default payments;