import { ADD_POST3, DELETE_POST3, FETCH_POST3 } from '../actions/types';

export default function postReducer3(state = [], action) {
  switch (action.type) {
    case ADD_POST3:
      return [...state, action.payload];
    case DELETE_POST3:
      return state.filter(post => post._id !== action.payload.id);
    case FETCH_POST3:
      return action.posts3;
    default:
      return state;
  }
}