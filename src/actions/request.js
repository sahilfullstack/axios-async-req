import axios from 'axios';
import {globalMap} from './../globalConstant'
import {RequestManager} from './request_manager'

// function defer() {
//   var deferred = {};
//   var promise = new Promise(function(resolve, reject) {
//       deferred.resolve = resolve;
//       deferred.reject  = reject;
//   });
//   deferred.promise = promise;
//   return deferred;
// }

var defer = function(request) {
  var res, rej;

  var promise = new Promise(function(resolve, reject) {
      res = resolve;
      rej = reject;
  });

  // promise.resolve = res;
  // promise.reject = rej;
  // promise.request = request;

  return promise;
}


// deferred.promise.then(function(data) {
//   console.log("i am called")
//   console.log(data)
// });


export const get = (apiUrl) => {

  let reqManager = new RequestManager(apiUrl, 'get')
  return reqManager.call()
//   console.log(ReqManager.greet())
//   // let promise =  deferred.promise;
//   let request = axios.create({
//     url: apiUrl,
//     method: 'get'
//   })

//   let promise = defer(request);

//   setTimeout(function() {
//     let reqObj = promise.request
//     promise.resolve(reqObj.call());
//   }, 2000);
  
// //  globalMap.push(promise)

//   return promise;
};



export const request_get = (apiUrl, responseCallback, errorCallback) => {

  for(let key in globalMap)
  {      
    globalMap[key].resolve()
    // globalMap[key].then(response => {
    //   console.log(response)
    // }).catch(error => {
    //   console.log(error)
    // }).then( function() {
    //   console.log("i am called")
    // })
  }

  // globalMap.push("a");
  // console.log(globalMap)
  // return axios.get(apiUrl)
  //   .then(response => {
  //     responseCallback(response)
  //   })
  //   .catch(error => {
  //     errorCallback(error)
  //   });
  };

  export const request_pipeline_get = (apiUrl, responseCallback, errorCallback) => {
    globalMap.push("b");
    console.log(globalMap)
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




  