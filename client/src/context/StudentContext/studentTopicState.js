import React, { useReducer } from 'react';
import axios from 'axios';
import StudentTopicContext from './studentTopicContext';
import StudentTopicReducer from './studentTopicReducer';
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


const StudentTopicState = props => {
  const initialState = {
    studentTopics: [],
    error: ''
  }

  const [state, dispatch] = useReducer(StudentTopicReducer, initialState);

  // Add new topic
  const addTopic = async (topic) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      }
    }
    try {
      const res = await axios.post('/api/students', topic, config);
      dispatch({
        type: STUDENT_ADD_TOPIC,
        payload: topic
      })
    } catch (err) {
      dispatch({
        type: STUDENT_ERROR,
        payload: err.response.msg
      })
    }
  }

  // Delete topic

  // Set current topic

  // Clear current topic

  // Update new topic

  // Filter topics

  // Clear filter

  return (
    <StudentTopicContext.Provider
      value={{
        studentTopics: state.studentTopics,
        error: state.error,
        addTopic
      }}>
      {props.children}
    </StudentTopicContext.Provider>
  )
}

export default StudentTopicState