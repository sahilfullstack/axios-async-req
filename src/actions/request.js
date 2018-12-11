import axios from 'axios';

export const request_get = (apiUrl, responseCallback, errorCallback) => {
    return axios.get(apiUrl)
    .then(response => {
      responseCallback(response)
    })
    .catch(error => {
      errorCallback(error)
    });
  };



  