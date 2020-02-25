import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
} from '../types';


const StudentTopicState = props => {
  const initialState = {
    studentTopics: [
      {
        id: 1,
        studentId: 'MER123456',
        title: "Student Book number one",
        topic: "Topic content goes here",
        "role": "student"
      },
      {
        id: 2,
        studentId: 'MRT123456',
        title: "Student Book number two",
        topic: "Topic content goes here",
        "role": "student"
      },
      {
        id: 3,
        studentId: 'FER123456',
        title: "Student Book number three",
        topic: "Topic content goes here",
        feedback: "This is teacher added feedback",
        grade: "8",
        "role": "student"
      }, {
        id: 4,
        studentId: 'MEL123456',
        title: "Student Book number four",
        topic: "Topic content goes here",
        "role": "student"
      }
    ]
  }

  const [state, dispatch] = useReducer(StudentTopicReducer, initialState);

  // Add new topic
  const addTopic = (topic) => {
    topic.id = uuidv4();
    dispatch({
      type: STUDENT_ADD_TOPIC,
      payload: topic
    })
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
        addTopic
      }}>
      {props.children}
    </StudentTopicContext.Provider>
  )
}

export default StudentTopicState