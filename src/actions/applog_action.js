import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export const fetchAppLogs = (page,params,sort_direction) => {
  const page1 = page? `?page=${page}`: "?page=1"
  const search_params = params && params["start_date"] ? `&search=${JSON.stringify(params)}`: ""
  const sort = sort_direction? `&sort=${sort_direction}` : ""

  const request = axios({
    method: 'get',
    url: `${appHost}/v1/app_logs${page1}${search_params}${sort}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "FETCH_APP_LOGS",
    payload: request
  }
} 


export const fetchAppLogsSuccess = (data) =>{
  return{
    type: "FETCH_APP_LOGS_SUCCESS",
    payload: data
  }
}

export const fetchAppLogsFailure = (err) =>{
  return{
    type: "FETCH_APP_LOGS_FAILURE",
    payload: err
  }
}

export const deleteLog = (id) =>{
  const request = axios({
    method: 'delete',
    url: `${appHost}/v1/app_logs/${id}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });

  return{
    type: "DELETE_LOG",
    payload: request
  }
}

export const deleteLogSuccess = (id,deletedLog,logList) =>{
  let log = logList.find(function(log){
    return log.id === id
  })
  
  logList.splice(logList.indexOf(log),1)
  return{
    type: "DELETE_LOG_SUCCESS",
    payload: deletedLog,
    logs: logList
  }
}

export const deleteLogFailure = (err) =>{
  return{
    type: "DELETE_LOG_FAILURE",
    payload: err
  }
}