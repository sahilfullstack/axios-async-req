export const deferPromise = (request) => {
    var res, rej;

    let promise = new Promise(function(resolve, reject) { 
        
        if(resolve) {
            console.log("i the resolve")
            console.log(resolve)
        }
        resolve = resolve;
        reject = reject;      
    });

    promise.resolve = res;
    promise.reject = rej;
    promise.request = request;

    return promise
}