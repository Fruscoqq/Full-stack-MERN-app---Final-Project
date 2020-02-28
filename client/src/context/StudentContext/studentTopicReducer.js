import {
  STUDENT_ADD_TOPIC,
  STUDENT_DELETE_TOPIC,
  STUDENT_SET_CURRENT,
  STUDENT_CLEAR_CURRENT,
  STUDENT_UPDATE_TOPIC,
  STUDENT_FILTER_TOPICS,
  STUDENT_CLEAR_FILTER,
  STUDENT_SET_ALERT,
  STUDENT_REMOVE_ALERT,
  STUDENT_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case STUDENT_ADD_TOPIC:
      return {
        ...state,
        studentTopics: [...state.studentTopics, action.payload]
      }
    case STUDENT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}