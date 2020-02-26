import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';


const AlertState = props => {
  const initialState = {
    alert: {},
    isAlert: false
  }


  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (type, msg) => {
    dispatch({
      type: SET_ALERT,
      payload: { type, msg }
    })

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT
      })
    }, 3000)
  }
  // Remove Alert

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        isAlert: state.isAlert,
        setAlert
      }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState