import {
  TEACHER_ADD_TOPIC,
  TEACHER_DELETE_TOPIC,
  TEACHER_SET_CURRENT,
  TEACHER_CLEAR_CURRENT,
  TEACHER_UPDATE_TOPIC,
  TEACHER_FILTER_TOPIC,
  TEACHER_CLEAR_FILTER,
  TEACHER_SET_ALERT,
  TEACHER_REMOVE_ALERT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case TEACHER_DELETE_TOPIC:
      return {
        ...state,
        teacherTopics: state.teacherTopics.filter(topic => topic.id !== action.payload)
      }
    case TEACHER_SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case TEACHER_UPDATE_TOPIC:
      return {
        ...state,
        teacherTopics: state.teacherTopics.map(topic => topic.id === action.payload.id ? action.payload : topic)
      }
    case TEACHER_CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    default:
      return state
  }
}