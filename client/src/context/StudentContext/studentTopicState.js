import React, { useReducer } from 'react';
import axios from 'axios';
import StudentTopicContext from './studentTopicContext';
import StudentTopicReducer from './studentTopicReducer';
import {
  STUDENT_ADD_TOPIC,
  STUDENT_ERROR,
  STUDENT_GET_TOPICS
} from '../types';


const StudentTopicState = props => {
  const initialState = {
    studentTopics: [],
    error: ''
  }

  const [state, dispatch] = useReducer(StudentTopicReducer, initialState);

  // Get student topics
  const getStudentTopics = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      }
    }
    try {
      const res = await axios.get('/api/students', config);
      dispatch({
        type: STUDENT_GET_TOPICS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: STUDENT_ERROR,
        payload: err.response.msg
      })
    }
  }

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
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: STUDENT_ERROR,
        payload: err.response.msg
      })
    }
  }


  return (
    <StudentTopicContext.Provider
      value={{
        studentTopics: state.studentTopics,
        error: state.error,
        addTopic,
        getStudentTopics
      }}>
      {props.children}
    </StudentTopicContext.Provider>
  )
}

export default StudentTopicState