import { combineReducers } from 'redux';
import posts from './postReducer';
import posts2 from './postReducer2';
import posts3 from './postReducer3';


export default combineReducers({
    posts: posts,
    posts2: posts2,
    posts3: posts3,
});