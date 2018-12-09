import { ADD_POST, DELETE_POST, FETCH_POST, FETCH_POST2, FETCH_POST3 } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post._id !== action.payload.id);
    case FETCH_POST:
      return action.posts;
    case FETCH_POST2:
      return action.posts2;
    case FETCH_POST3:
      return action.posts3;
    default:
      return state;
  }
}