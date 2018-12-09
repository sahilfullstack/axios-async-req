import { ADD_POST2, DELETE_POST2, FETCH_POST2 } from '../actions/types';

export default function postReducer3(state = [], action) {
  switch (action.type) {
    case ADD_POST2:
      return [...state, action.payload];
    case DELETE_POST2:
      return state.filter(post => post._id !== action.payload.id);
    case FETCH_POST2:
      return action.posts2;
    default:
      return state;
  }
}