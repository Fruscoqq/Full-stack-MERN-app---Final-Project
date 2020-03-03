import React, { useContext } from 'react';
import AlertContext from '../../context/Alert/alertContext';

const Alert = () => {

  const alertContext = useContext(AlertContext);

  const { type, msg } = alertContext.alert;

  return (
    <div className="container">
      {alertContext.isAlert !== false && (<div className={`alert alert-${type} mt-3`} role="alert">
        <i class="fas fa-exclamation-circle"></i> {msg}
      </div>)}
    </div>
  )
}

export default Alert
