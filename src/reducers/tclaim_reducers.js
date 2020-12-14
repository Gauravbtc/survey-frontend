const INITIAL_STATE ={
  claimNew: {claim: null,loading: false,success: false,message: null,error: null},
  claimShow: {claim: null, error:null, loading: false,success: false},
  claimUpdate: {claim: null,loading: false,success: false,error: null,message: null},
  claimDelete: {claim: null ,loading: false,success: false,error: null ,message: null},  
  impClaim: {error: null, loading: false,message: null,success: false},
  claimReport: {claims: [], loading: false, message: null, success: false}
};

const claims = (state = INITIAL_STATE, action) => {
  let error;

  switch (action.type) {
    case 'CREATE_CLAIM':
      return {...state, claimNew: {claim: null, error: null, loading: true,message: null,success: false}}
    case 'CREATE_CLAIM_SUCCESS':
      return {...state, claimNew: {claim: action.payload, error: null, loading: false,message: "Claim created Sucessfully",success: true}}
    case 'CREATE_CLAIM_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, claimNew: { claim: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'CREATE_CLAIM_RESET':
      return {...state, claimNew: {claim: null, error: null, loading: false,message: null,success: false}}
    
    case 'FETCH_CLAIM':
      return {...state, claimShow: { claim: null , error: null, loading: true,success: false}}
    case 'FETCH_CLAIM_SUCCESS':
      return {...state, claimShow: { claim: action.payload , error: null, loading: false,success: true}} 
    case 'FETCH_CLAIM_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, claimShow: { claim: null, error: error, loading: false,success: false}}

    case 'UPDATE_CLAIM':
      return {...state, claimUpdate: { claim: null , error: null, loading: true,success: false,message: null}}
    case 'UPDATE_CLAIM_SUCCESS':
       return {...state, claimUpdate: { claim: action.payload , error: null, loading: false,success: true,message: "Invoice updated Sucessfully"}}
    case 'UPDATE_CLAIM_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, claimUpdate: { claim: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'RESET_CLAIM_UPDATE':
      return {...state, claimUpdate: { claim: null , error: null, loading: false,success: false,message: null}}
    
    case 'DELETE_CLAIM':
      return {...state, claimDelete: { claim: null , error: null, loading: true,success: false,message: null}}
    case 'DELETE_CLAIM_SUCCESS':
      return  {...state,claimDelete: {claim: action.payload.claim ,loading: false,success: true,message: action.payload.message,error: null}}
    case 'DELETE_CLAIM_FAILURE':  
      error = action.payload || {message: action.payload.error};
      return {...state, claimDelete: { claim: null ,error: error , loading: false,success: false,message: action.payload.message}}
    
    case 'IMPORT_INVOICE_CLAIM':
      return {...state, impClaim: { error: null, loading: true,message: null,success: false}}
    case 'IMPORT_INVOICE_CLAIM_SUCESSS':
      return {...state, impClaim: { error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_INVOICE_CLAIM_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, impClaim: { error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'IMPORT_INVOICE_CLAIM_RESET':
      return {...state, impClaim: { error: null, loading: false,message: null,success: false}}

    case 'FETCH_CLAIM_REPORTS': 
      return {...state, claimReport: { claims: [], message: null, loading: true}}
    case 'FETCH_CLAIM_REPORTS_SUCCESS':
      return {...state, claimReport: { claims: action.payload, loading: false,message: "Claims found Successfully"}}
    case 'FETCH_CLAIM_REPORTS_FAILURE':
      error = action.payload 
      return {...state, claimReport: { claims: [], message: error, loading: false}}
    case 'FETCH_CLAIM_REPORTS_RESET':
      return {...state, claimReport: { claims: [], message: null, loading: false}}
  
    default: 
      return state;  
    
  }
}

export default claims;