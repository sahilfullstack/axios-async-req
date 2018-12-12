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


  export const request_pipeline_get = (apiUrl, responseCallback, errorCallback) => {
    
    let apiUrl2 = apiUrl+'/2'
    let apiUrl3 = apiUrl+'/3'

    var pipeline_requests = [];        
    let requestObject = axios.create({
      url: apiUrl
    });

    let requestObject2 = axios.create({
      url: apiUrl2
    });

    let requestObject3 = axios.create({
      url: apiUrl3
    });

    pipeline_requests.push(requestObject)
    pipeline_requests.push(requestObject2)
    pipeline_requests.push(requestObject3)
    
    for(let key in pipeline_requests)
    {
      pipeline_requests[key].call().then(response => {
        responseCallback(response)
      }).catch(error => {
        errorCallback(error)
      }).then( function() {
        console.log("i am called")
      })
    }

    // return axios.get(apiUrl)
    // .then(response => {
    //   responseCallback(response)
    // })
    // .catch(error => {
    //   errorCallback(error)
    // });
  };




  