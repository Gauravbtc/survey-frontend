const INITIAL_STATE ={
  StatusList: {statuses: [],error: null,loading: false,success: false}
};

const status = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STATUS_LIST':
      return { ...state, StatusList: { statuses: [],error: null,loading: true,success: false}}
    case 'STATUS_LIST_SUCCESS':
     return { ...state, StatusList: { statuses: action.payload, error: null,loading: false,success: true }}
    case 'STATUS_LIST_FAILURE':  
     return { ...state, StatusList: { statuses: [],error: null,loading: false,success: false}}
    
    default:
      return state;
  }
}

export default status;