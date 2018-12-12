import { ADD_POST, ADD_POST2, ADD_POST3, DELETE_POST, DELETE_POST2, DELETE_POST3, FETCH_POST, FETCH_POST2, FETCH_POST3 } from './types';
import axios from 'axios';
import {request_get, request_pipeline_get} from './request.js';

const apiUrl = 'http://localhost:4000/posts';

export const createPost = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, body})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  }
};

export const createPost2 = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, body})
      .then(response => {
        dispatch(createPostSuccess2(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess2 =  (data) => {
  return {
    type: ADD_POST2,
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  }
};

export const createPost3 = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, body})
      .then(response => {
        dispatch(createPostSuccess3(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess3 =  (data) => {
  return {
    type: ADD_POST3,
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  }
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
}

export const deletePost = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const deletePostSuccess2 = id => {
  return {
    type: DELETE_POST2,
    payload: {
      id
    }
  }
}

export const deletePost2 = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deletePostSuccess2(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deletePostSuccess3 = id => {
  return {
    type: DELETE_POST3,
    payload: {
      id
    }
  }
}

export const deletePost3 = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deletePostSuccess3(response.data))
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

export const fetchAllPosts = () => {
  // axios.get(apiUrl)
  //     .then(response => {
  //       console.log("got the first response")
  //       dispatch(fetchPosts(response.data))
  //     })
  //     .catch(error => {
  //       throw(error);
  //     });
  return (dispatch) => {
    return request_pipeline_get(apiUrl, response => {
        console.log("got the first response")
        dispatch(fetchPosts(response.data))
      }, error => {
        throw(error);
      });
  };
};

export const fetchPosts2 = (posts2) => {
  return {
    type: FETCH_POST2,
    posts2
  }
};

export const fetchAllPosts2 = () => {

  // axios.get(apiUrl+'/2')
  //     .then(response => {
  //       console.log("got the second response")
  //       dispatch(fetchPosts2(response.data))
  //     })
  //     .catch(error => {
  //       throw(error);
  //     });
  return (dispatch) => {
    return request_get(apiUrl+'/2', response => {
        console.log("got the second response")
        dispatch(fetchPosts2(response.data))
      }, error => {
        throw(error);
      });
  };
};

export const fetchPosts3 = (posts3) => {
  return {
    type: FETCH_POST3,
    posts3
  }
};

export const fetchAllPosts3 = () => {
  // axios.get(apiUrl+'/3')
  //     .then(response => {
  //       console.log("got the third response")
  //       dispatch(fetchPosts3(response.data))
  //     })
  //     .catch(error => {
  //       throw(error);
  //     });
  return (dispatch) => {
    return request_get(apiUrl+'/3', response => {
        console.log("got the third response")
        dispatch(fetchPosts3(response.data))
      }, error => {
        throw(error);
      });
  };
};