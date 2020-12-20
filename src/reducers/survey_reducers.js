const INITIAL_STATE ={
  surveyNew: {survey: null,loading: false,success: false,message: null,error: null},
  surveyShow: {survey: null, error:null, loading: false,success: false},
  surveyUpdate: {survey: null,loading: false,success: false,error: null,message: null},
  surveyList: {surveys: [], error:null, loading: false,success: false},
  newParticipant: {participant: null,loading: false,success: false,message: null,error: null},
  surveyVerification: {participant: null, loading: false, success: false, message: null, error: null},
  surveyQuestion: {survey: null, error:null, loading: false,success: false},
  surveyResult: {survey: null, error: null, loading: false, success: false},
  showSurveyResult: {survey: null, error: null, loading: false, success: false}
  // billDelete: {bill: null ,loading: false,success: false,error: null ,message: null}
};

const surveys = (state = INITIAL_STATE, action) => {
  let error;

  switch (action.type) {
    case 'CREATE_SURVEY':
      return {...state, surveyNew: {survey: null, error: null, loading: true,message: null,success: false}}
    case 'CREATE_SURVEY_SUCCESS':
      return {...state, surveyNew: {survey: action.payload.data, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'CREATE_SURVEY_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, surveyNew: { survey: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'CREATE_SURVEY_RESET':
      return {...state, surveyNew: {survey: null, error: null, loading: false,message: null,success: false}}

    case 'FETCH_SURVEYS':
      return {...state, surveyList: { surveys: [], error: null, loading: true,success: false}}
    case 'FETCH_SURVEYS_SUCCESS':
      return {...state, surveyList: { surveys: action.payload.data, error: null, loading: false,success: true}}      
    case 'FETCH_SURVEYS_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, surveyList: { surveys: [], error: error, loading: false,success: action.payload.success}}  

    case 'FETCH_SURVEY':
      return {...state, surveyShow: { survey: null , error: null, loading: true,success: false}}
    case 'FETCH_SURVEY_SUCCESS':
      return {...state, surveyShow: { survey: action.payload.data , error: null, loading: false,success: true}} 
    case 'FETCH_SURVEY_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, surveyShow: { survey: null, error: error, loading: false,success: false}}  
    
    case 'UPDATE_SURVEY':
      return {...state, surveyUpdate: { survey: null , error: null, loading: true,success: false,message: null}}
    case 'UPDATE_SURVEY_SUCCESS':
        return {...state, surveyUpdate: { survey: action.payload.data , error: null, loading: false,success: action.payload.success,message: action.payload.message}}
    case 'UPDATE_SURVEY_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, surveyUpdate: { survey: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'UPDATE_SURVEY_RESET':
      return {...state, surveyUpdate: { survey: null , error: null, loading: false,success: false,message: null}}
      
    case 'CREATE_PARTICIPANT':
      return {...state, newParticipant: {participant: null, error: null, loading: true,message: null,success: false}}
    case 'CREATE_PARTICIPANT_SUCCESS':
      return {...state, newParticipant: {participant: action.payload.data, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'CREATE_PARTICIPANT_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, newParticipant: { participant: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'RESEST_CREATE_PARTICIPANT':
      return {...state, newParticipant: {participant: null, error: null, loading: false,message: null,success: false}}  
    
    case 'SURVEY_CONFIRMATION':
      return {...state, surveyVerification: {participant: null, error: null, loading: true,message: null,success: false}}
    case 'SURVEY_CONFIRMATION_SUCCESS':
      return {...state, surveyVerification: {participant: action.payload.data, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'SURVEY_CONFIRMATION_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, surveyVerification: { participant: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
      
    case 'FETCH_SURVEY_QUESTION':
      return {...state, surveyQuestion: { survey: null , error: null, loading: true,success: false}}
    case 'FETCH_SURVEY_QUESTION_SUCCESS':
      return {...state, surveyQuestion: { survey: action.payload.data , error: null, loading: false,success: true}} 
    case 'FETCH_SURVEY_QUESTION_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, surveyQuestion: { survey: null, error: error, loading: false,success: false}}   
    

    case 'CREATE_SURVEY_RESULT':
      return {...state, surveyResult: {survey: null, error: null, loading: true,message: null,success: false}}
    case 'CREATE_SURVEY_RESULT_SUCCESS':
      return {...state, surveyResult: {survey: action.payload.data, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'CREATE_SURVEY_RESULT_FAILURE':
      error = action.payload || {message: action.payload.message};
      return {...state, surveyResult: { survey: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    
    case 'SHOW_SURVEY_RESULT':
      return {...state, showSurveyResult: {survey: null, error: null, loading: true,message: null,success: false}}
    case 'SHOW_SURVEY_RESULT_SUCCESS':
      return {...state, showSurveyResult: {survey: action.payload.data, error: null, loading: false,message: action.payload.message,success: action.payload.success}}
    case 'SHOW_SURVEY_RESULT_FAILURE':
      error =  action.payload.message
      return {...state, showSurveyResult: { survey: null, error: error, loading: false,message: action.payload.message,success: action.payload.success}}
    
    default: 
      return state;  
    
  }
}

export default surveys;