import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import {globalMap, shouldQueue} from '../globalConstant'

class Deferred<T> {

    promise: Promise<T>;
    resolve: (value?: T | PromiseLike<T>) => void;
    reject:  (reason?: any) => void;
    request: AxiosRequestConfig;
  
    constructor(request) {
      this.promise = new Promise<T>((resolve, reject) => {
        this.resolve = resolve;
        this.reject  = reject;
      });
      this.request = request
    }
  }

export class RequestManager {
    url: string;
    method: string;

    constructor(url: string, method: string) {
        this.url = url;
        this.method = method;
    }

    call(makeQueuable) {
        let a : boolean= false;

        const config: AxiosRequestConfig =  {
            url: this.url,
            method: this.method
        };
        // create a deferred promise and return the deferred promise
        let deferredPromise = new Deferred(config)
        let promise = deferredPromise.promise

        if(shouldQueue) {
            globalMap.push(deferredPromise)
        } else {
            this.executeRequest(deferredPromise);
        }

        if(makeQueuable)
        {
            // make it queuable
        }

        return promise
    }

    executeRequest(promise) {
        let reqObj = axios.create(promise.request)
        promise.resolve(reqObj.request(promise.request))
    }
}
