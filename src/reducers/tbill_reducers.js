const INITIAL_STATE ={
  billNew: {bill: null,loading: false,success: false,message: null,error: null},
  billShow: {bill: null, error:null, loading: false,success: false},
  billUpdate: {bill: null,loading: false,success: false,error: null,message: null},
  billList: {bills: [], error:null, loading: false,success: false},
  billDelete: {bill: null ,loading: false,success: false,error: null ,message: null}
};

const bills = (state = INITIAL_STATE, action) => {
  let error;

  switch (action.type) {
    case 'CREATE_BILL':
      return {...state, billNew: {bill: null, error: null, loading: true,message: null,success: false}}
    case 'CREATE_BILL_SUCCESS':
      return {...state, billNew: {bill: action.payload, error: null, loading: false,message: "Bill created Sucessfully",success: true}}
    case 'CREATE_BILL_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, billNew: { bill: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'CREATE_BILL_RESET':
      return {...state, billNew: {bill: null, error: null, loading: false,message: null,success: false}}
    
      case 'FETCH_BILL':
      return {...state, billShow: { bill: null , error: null, loading: true,success: false}}
    case 'FETCH_BILL_SUCCESS':
      return {...state, billShow: { bill: action.payload , error: null, loading: false,success: true}} 
    case 'FETCH_BILL_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, billShow: { bill: null, error: error, loading: false,success: false}}
  
    case 'UPDATE_BILL':
      return {...state, billUpdate: { bill: null , error: null, loading: true,success: false,message: null}}
    case 'UPDATE_BILL_SUCCESS':
       return {...state, billUpdate: { bill: action.payload , error: null, loading: false,success: true,message: "Bill updated Sucessfully"}}
    case 'UPDATE_BILL_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, billUpdate: { bill: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'RESET_BILL_UPDATE':
      return {...state, billUpdate: { bill: null , error: null, loading: false,success: false,message: null}}
    
    case 'FETCH_BILLS':
      return {...state, billList: { bills: [], error: null, loading: true,success: false}}
    case 'FETCH_BILLS_SUCCESS':
      return {...state, billList: { bills: action.payload, error: null, loading: false,success: true}}      
    case 'FETCH_BILLS_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, billList: { bills: [], error: error, loading: false,success: action.payload.success}}
    
    case 'DELETE_BILL':
      return {...state, billDelete: { bill: null , error: null, loading: true,success: false,message: null}}
    case 'DELETE_BILL_SUCCESS':
      return  {...state,billDelete: {bill: action.payload.bill ,loading: false,success: true,message: action.payload.message,error: null}}
    case 'DELETE_BILL_FAILURE':  
      error = action.payload || {message: action.payload.error};
      return {...state, billDelete: { invoice: null ,error: error , loading: false,success: false,message: action.payload.message}}
    
    default: 
      return state;  
    
  }
}

export default bills;