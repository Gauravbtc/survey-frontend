const INITIAL_STATE ={
  loginUser: {user: null, error:null, loading: false,message: null,authenticate: false,success: false}
};

const users = (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case "USER_LOGIN":
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,authenticate: false,success: false}}
    case "USER_LOGIN_SUCCESS":
      return {...state, loginUser: { user: action.payload.data, error: null, loading: false,message: action.payload.message,authenticate: action.payload.success, success: action.payload.success }}
    case "USER_LOGIN_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,authenticate: false,success: action.payload.success}}
    case "RESET_USER": 
      return {...state, loginUser: { user: null, error: null, loading: false,message: null,authenticate: false,success: false}}
 
    case "USER_LOGOUT": 
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,authenticate: false,success: false}}
    case "USER_LOGOUT_SUCCESS":
      return {...state, loginUser: { user: action.payload.data, error: null, loading: false,message: null,authenticate: action.payload.success, success: action.payload.success }}
    case "USER_LOGOUT_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,authenticate: false,success: action.payload.success}}
    case "RESET_LOGIN_USER":
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,authenticate: false,success: false}}      
    
    case "USER_SIGNUP":
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,authenticate: false,success: false}}
    case "USER_SIGNUP_SUCCESS":
      return {...state, loginUser: { user: action.payload.data, error: null, loading: false,message: action.payload.message,authenticate: action.payload.success, success: action.payload.success }}
    case "USER_SIGNUP_FAILURE":
      error = action.payload.data || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,authenticate: false,success: action.payload.success}}

    case "USER_CONFIRMATION":
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,authenticate: false,success: false}}
    case "USER_CONFIRMATION_SUCCESS":
      return {...state, loginUser: { user: action.payload.user, error: null, loading: false,message: action.payload.message,authenticate: action.payload.user.is_active, success: action.payload.success }}
      
    case "USER_CONFIRMAION_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,authenticate: false,success: action.payload.success}}
      
    case "USER_FORGOT_PASSWORD":
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,authenticate: false,success: false}}
    case "USER_FORGOT_PASSWORD_SUCCESS":
      return {...state, loginUser: { user: action.payload.user, error: null, loading: false,message: action.payload.message,authenticate: action.payload.user.is_active, success: action.payload.success }}
    case "USER_FORGOT_PASSWORD_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,authenticate: false,success: action.payload.success}}
    
    case "USER_PASSWORD_NEW":
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,authenticate: false,success: false}}
    case "USER_FORGOT_PASSWORD_NEW_SUCCESS":
      return {...state, loginUser: { user: action.payload.user, error: null, loading: false,message: action.payload.message,authenticate: action.payload.user.is_active, success: action.payload.success }}
    case "USER_FORGOT_PASSWORD_NEW_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,authenticate: false,success: action.payload.success}}
    
    case 'AUTH_USER':
      return {...state, loginUser: { user: null, error: null, loading: true,message: null,authenticate: false,success: false}}
    case 'AUTH_USER_SUCCESS':
      return {...state, loginUser: { user: action.payload.user, error: null, loading: false,message: action.payload.message,authenticate: action.payload.user.is_active, success: action.payload.success }}
    case 'AUTH_USER_FAILURE':
      error = action.payload || {message: "Logged out due to another active session"};
      return {...state, loginUser: { user: null, error: error, loading: false,message: action.payload.message,authenticate: false,success: false}}
    
    default:
      return state
  } 
}

export default users;