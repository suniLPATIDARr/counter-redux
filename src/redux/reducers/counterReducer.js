import { ActionTypes } from "../constants/action.types";

const intialState = {
  payload: 1,
  status:''
};
export const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return { 
        ...state, 
        ...action};
    case ActionTypes.SUCCESS:
      return { ...action };
    case ActionTypes.FAILURE:
      return {...state};
    default:
      return state;
  }
};