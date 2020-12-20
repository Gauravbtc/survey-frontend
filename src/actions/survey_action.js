import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export const createSurvey = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/api/v1/surveys`,
    data: {"survey": params },
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_SURVEY",
    payload: request
  }
}

export const createSurveySuccess = (survey) =>{
  return {
    type: "CREATE_SURVEY_SUCCESS",
    payload: survey
  }
}

export const createSurveyFailure = (err) =>{
  return {
    type: "CREATE_SURVEY_FAILURE",
    payload: err
  }
}



export const fetchSurveys = () => {
  const request = axios({
    method: 'get',
    url: `${appHost}/api/v1/surveys`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_SURVEYS",
    payload: request
  }
}

export const fetchSurveysSuccess = (surveys) =>{
  return{
    type: "FETCH_SURVEYS_SUCCESS",
    payload: surveys
  }
}

export const fetchSurveysFailure = (err) =>{
  return{
    type: "FETCH_SURVEYS_FAILURE",
    payload: err
  }
}

export const fetchSurvey = (id) => {
  const request = axios({
    method: 'get',
    url: `${appHost}/api/v1/surveys/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_SURVEY",
    payload: request
  }
}

export const fetchSurveySuccess = (survey) =>{
  return{
    type: "FETCH_SURVEY_SUCCESS",
    payload: survey
  }
}

export const fetchSurveyFailure = (err) =>{
  return{
    type: "FETCH_SURVEY_FAILURE",
    payload: err
  }
}

export const createSurveyReset = () =>{
  return({
    type: "CREATE_SURVEY_RESET"
  })
}

export const updateSurvey = (params) =>{
  const request = axios({
    method: 'put',
    url: `${appHost}/api/v1/surveys/${params.id}`,
    data: {"survey": params },
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "UPDATE_SURVEY",
    payload: request
  }
}

export const updateSurveySuccess = (survey) =>{
  return {
    type: "UPDATE_SURVEY_SUCCESS",
    payload: survey
  }
}

export const updateSurveyFailure = (err) =>{
  return {
    type: "UPDATE_SURVEY_FAILURE",
    payload: err
  }
}

export const updateSurveyReset = () =>{
  return({
    type: "UPDATE_SURVEY_RESET"
  })
}


export const createParticipant = (params) =>{
  const request = axios({
    method: 'post',
    url: `${appHost}/api/v1/participants`,
    data: {"participant": params },
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return {
    type: "CREATE_PARTICIPANT",
    payload: request
  }
}

export const createParticipantSuccess = (participant) =>{
  return {
    type: "CREATE_PARTICIPANT_SUCCESS",
    payload: participant
  }
}

export const createParticipantFailure = (err) =>{
  return {
    type: "CREATE_PARTICIPANT_FAILURE",
    payload: err
  }
}

export const resetcreateParticipant = () =>{
  return {
    type: "RESEST_CREATE_PARTICIPANT"
  }
}


export const serveyConfirmation = (params) =>{
  const request = axios({
    method: 'get',
    url: `${appHost}/api/v1/participants/verify_survey_auth`,
    headers: {'survey_token': params}
  });


  return {
    type: "SURVEY_CONFIRMATION",
    payload: request
  }
}

export const serveyConfirmationSuccess = (payload) =>{
  return {
    type: "SURVEY_CONFIRMATION_SUCCESS",
    payload: payload
  }
}

export const serveyConfirmationFailure = (err) =>{
  return {
    type: "SURVEY_CONFIRMATION_FAILURE",
    payload: err
  }
}


export const fetchSurveyQuestion = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/api/v1/participants/survey_questions`,
    data: {"survey_id": params},
    headers: {'survey_token': localStorage.getItem("survey_token")}
  });
  return {
    type: "FETCH_SURVEY_QUESTION",
    payload: request
  }
}

export const fetchSurveyQuestionSuccess = (survey) =>{
  return{
    type: "FETCH_SURVEY_QUESTION_SUCCESS",
    payload: survey
  }
}

export const fetchSurveyQuestionFailure = (err) =>{
  return{
    type: "FETCH_SURVEY_QUESTION_FAILURE",
    payload: err
  }
}


export const createSurveyResult = (params) =>{
  const request = axios({
    method: 'post',
    url: `${appHost}/api/v1/participants/create_survey_result`,
    data: {"survey_result": params },
    headers: {'survey_token': localStorage.getItem("survey_token")}
  });

  return {
    type: "CREATE_SURVEY_RESULT",
    payload: request
  }
}

export const createSurveyResultSuccess = (result) =>{
  return {
    type: "CREATE_SURVEY_RESULT_SUCCESS",
    payload: result
  }
}

export const createSurveyResultFailure = (err) =>{
  return {
    type: "CREATE_SURVEY_RESULT_FAILURE",
    payload: err
  }
}

export const fetchSurveyResult = (params) =>{
  const request = axios({
    method: 'post',
    url: `${appHost}/api/v1/participants/show_survey_result`,
    data: {"participant_id": params },
    headers: {'survey_token': localStorage.getItem("survey_token")}
  });

  return {
    type: "SHOW_SURVEY_RESULT",
    payload: request
  }
}

export const fetchSurveyResultSuccess = (result) =>{
  return {
    type: "SHOW_SURVEY_RESULT_SUCCESS",
    payload: result
  }
}

export const fetchSurveyResultFailure = (err) =>{
  return {
    type: "SHOW_SURVEY_RESULT_FAILURE",
    payload: err
  }
}

