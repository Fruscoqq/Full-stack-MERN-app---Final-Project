import React, { useReducer } from 'react';
import uuid from 'uuid';
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
} from '../types';


const TeacherTopicState = props => {
  const initialState = {
    teacherTopics: [
      {
        id: 5,
        studentId: 'MER123456',
        title: "Student Book number one",
        topic: "Topic content goes here",
        "role": "student",
        feedback: 'Teacher feedback',
        grade: '7',
        type: 'Private'
      },
      {
        id: 6,
        studentId: 'MRT123456',
        title: "Student Book number two",
        topic: "Topic content goes here",
        "role": "student",
        feedback: '',
        grade: '',
        type: 'Private'
      },
      {
        id: 7,
        studentId: 'FER123456',
        title: "Student Book number three",
        topic: "Topic content goes here",
        "role": "student",
        feedback: '',
        grade: '',
        type: 'Public'
      }, {
        id: 8,
        studentId: 'MEL123456',
        title: "Student Book number four",
        topic: "Topic content goes here",
        "role": "student",
        feedback: '',
        grade: '',
        type: 'Private'
      }
    ],
    current: null
  }


  const [state, dispatch] = useReducer(TeacherTopicReducer, initialState);

  // Add new topic

  // Delete topic
  const deleteTopic = (id) => {
    dispatch({
      type: TEACHER_DELETE_TOPIC,
      payload: id
    })
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
  const reviewTopic = (proposal) => {
    dispatch({
      type: TEACHER_UPDATE_TOPIC,
      payload: proposal
    })
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
        reviewTopic
      }}>
      {props.children}
    </TeacherTopicContext.Provider>
  )
}

export default TeacherTopicState