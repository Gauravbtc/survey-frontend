import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export const StatusList = (type) => {
  const request = axios({
    method: 'GET',
    url: `${appHost}/v1/status_list?status=${type}`,
    headers: {'auth_token': localStorage.getItem("user")}
  });
  return {
    type: "STATUS_LIST",
    payload: request
  }
}

export const StatusListSuccess = (statuses) => {
  return {
    type: "STATUS_LIST_SUCCESS",
    payload: statuses
  }
}

export const StatusListFailure = (err) => {
  return {
    type: "STATUS_LIST_FAILURE",
    payload: err
  }
}