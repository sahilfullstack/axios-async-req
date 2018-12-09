import axios from 'axios';
import { FETCH_POST} from './types';

export const get = (apiUrl) => {
    return (dispatch) => {
      
        const instance = axios.create({
            baseURL: apiUrl,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });

          // Add a request interceptor
            instance.interceptors.request.use(function (config) {
                
                console.log("yes i am called");

                // Do something before request is sent
                return config;
            }, function (error) {
                // Do something with request error
                return Promise.reject(error);
            });
            
            

        return instance.call()
        .then(response => {
          console.log("got the first response")
          console.log(response.data);
          dispatch(fetchPosts(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  

  export const fetchPosts = (posts) => {
    return {
      type: FETCH_POST,
      posts
    }
  };
  