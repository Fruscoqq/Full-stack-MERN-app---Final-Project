import React, { useReducer } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import TeacherTopicContext from './teacherTopicContext';
import TeacherTopicReducer from './teacherTopicReducer';
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
  TEACHER_GET_TOPICS
} from '../types';


const TeacherTopicState = props => {
  const initialState = {
    teacherTopics: [],
    current: null
  }


  const [state, dispatch] = useReducer(TeacherTopicReducer, initialState);

  // Get all students topics
  // Get student topics
  const teacherGetTopics = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      }
    }
    try {
      const res = await axios.get('/api/teachers', config);
      dispatch({
        type: TEACHER_GET_TOPICS,
        payload: res.data
      })
    } catch (err) {
      // dispatch({
      //   type: STUDENT_ERROR,
      //   payload: err.response.msg
      // })
      console.log(err.message);
    }
  }

  // Delete topic
  const deleteTopic = async (id) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token')
      }
    }
    try {
      await axios.delete(`/api/teachers/${id}`, config);
      console.log(id);
      dispatch({
        type: TEACHER_DELETE_TOPIC,
        payload: id
      })
    } catch (err) {
      // dispatch({
      //   type: STUDENT_ERROR,
      //   payload: err.response.msg
      // })
      console.log(err.message);
    }
  }

  // Set current topic
  const setCurrent = (topic) => {
    dispatch({
      type: TEACHER_SET_CURRENT,
      payload: topic
    })
  }

  // Clear current topic
  const clearCurrent = () => {
    dispatch({
      type: TEACHER_CLEAR_CURRENT
    })
  }
  // Update new topic
  const reviewTopic = async (proposal) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      }
    }
    try {
      const res = await axios.put(`/api/teachers/${proposal._id}`, proposal, config);
      console.log(proposal);
      dispatch({
        type: TEACHER_UPDATE_TOPIC,
        payload: res.data
      })
    } catch (err) {
      // dispatch({
      //   type: STUDENT_ERROR,
      //   payload: err.response.msg
      // })
      console.log(err.message);
    }
  }

  // Filter topics

  // Clear filter

  return (
    <TeacherTopicContext.Provider
      value={{
        teacherTopics: state.teacherTopics,
        current: state.current,
        deleteTopic,
        setCurrent,
        clearCurrent,
        reviewTopic,
        teacherGetTopics
      }}>
      {props.children}
    </TeacherTopicContext.Provider>
  )
}

export default TeacherTopicState