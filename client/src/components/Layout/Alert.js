import React, { useContext } from 'react';
import AlertContext from '../../context/Alert/alertContext';

const Alert = () => {

  const alertContext = useContext(AlertContext);

  const { type, msg } = alertContext.alert;

  return (
    <div className="my-3">
      {alertContext.isAlert === true && (<div className={`alert alert-${type}`} role="alert">
        <i class="fas fa-exclamation-circle"></i> {msg}
      </div>)}
    </div>
  )
}

export default Alert
