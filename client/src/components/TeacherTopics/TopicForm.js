import React, { useContext, useState, useEffect } from 'react';
import TeacherTopicContext from '../../context/TeacherContext/teacherTopicContext';
import Alert from '../Layout/Alert';
import AlertContext from '../../context/Alert/alertContext';

const TopicForm = () => {

  const teacherTopicContext = useContext(TeacherTopicContext);
  const alertContext = useContext(AlertContext);

  useEffect(() => {
    if (teacherTopicContext.current !== null) {
      setProposal(teacherTopicContext.current)
    } else {
      setProposal({
        studentId: '',
        title: '',
        topic: '',
        feedback: '',
        grade: '',
        type: 'Private'
      })
    }
  }, [teacherTopicContext, teacherTopicContext.current])

  const [proposal, setProposal] = useState({
    studentId: '',
    title: '',
    topic: '',
    feedback: '',
    grade: '',
    type: 'Private'
  })

  const onChange = (e) => {
    setProposal({
      ...proposal,
      [e.target.name]: e.target.value
    })
  }

  const clearAll = (e) => {
    e.preventDefault();
    teacherTopicContext.clearCurrent();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (grade === '' || feedback === '') {
      alertContext.setAlert('danger', 'Please fill in all fields')
    } else {
      teacherTopicContext.reviewTopic(proposal);
      teacherTopicContext.clearCurrent();
      alertContext.setAlert('success', 'Review submited')
    }
  }

  const { studentId, title, feedback, grade, type } = proposal;
  return (
    <form className="form-group teacherForm" onSubmit={onSubmit}>
      <Alert />
      <input type="text" id="studentid" placeholder="Enter your student ID" name="studentId" value={studentId} onChange={onChange} className="form-control mb-3 disabled" disabled />
      <input type="text" id="titleid" placeholder="Topic Title" name="title" value={title} onChange={onChange} className="form-control mb-3" disabled />
      {/*  */}
      <input type="text" id="feedbackid" placeholder="Enter your feedback" name="feedback" value={feedback} onChange={onChange} className="form-control mb-3" />
      <input type="text" id="gradeid" placeholder="Grade" name="grade" value={grade} onChange={onChange} className="form-control mb-3" />
      <div className="text-center my-3">
        <input type="checkbox" name="type" value="Private" checked={type === 'Private'} onChange={onChange} /> Private
      <input type="checkbox" className="ml-3" name="type" value="Public" checked={type === 'Public'} onChange={onChange} /> Public
      </div>
      <input type="submit" value="Submit Your Review" className="btn btn-block btn-success submitBtn" />
      {teacherTopicContext.current && (<button className="btn btn-warning btn-block editBtn" onClick={clearAll}>Clear</button>)}
    </form>
  )
}

export default TopicForm
