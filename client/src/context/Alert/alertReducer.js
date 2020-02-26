import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        isAlert: true,
        alert: action.payload
      }
    case REMOVE_ALERT:
      return {
        ...state,
        alert: {},
        isAlert: false
      }
    default:
      return state
  }
}