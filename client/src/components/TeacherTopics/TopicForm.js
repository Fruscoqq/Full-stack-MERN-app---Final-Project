import React, { useContext, useState, useEffect } from 'react';
import TeacherTopicContext from '../../context/TeacherContext/teacherTopicContext';

const TopicForm = () => {

  const teacherTopicContext = useContext(TeacherTopicContext);

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
    teacherTopicContext.reviewTopic(proposal)
  }

  const { studentId, title, feedback, grade, type } = proposal;
  return (
    <form className="form-group" onSubmit={onSubmit}>
      <h4 className="text-primary text-center">Review Student Proposals</h4>
      <label htmlFor="studentid">Student ID</label>
      <input type="text" id="studentid" placeholder="Enter your student ID" name="studentId" value={studentId} onChange={onChange} className="form-control mb-3 disabled" disabled />
      <label htmlFor="titleid">Title</label>
      <input type="text" id="titleid" placeholder="Topic Title" name="title" value={title} onChange={onChange} className="form-control mb-3" disabled />
      {/*  */}
      <label htmlFor="feedbackid">Feedback</label>
      <input type="text" id="feedbackid" placeholder="Enter your feedback" name="feedback" value={feedback} onChange={onChange} className="form-control mb-3" />
      <label htmlFor="gradeid">Grade</label>
      <input type="text" id="gradeid" placeholder="Grade" name="grade" value={grade} onChange={onChange} className="form-control mb-3" />
      <div className="text-center my-3">
        <input type="checkbox" name="type" value="Private" checked={type === 'Private'} onChange={onChange} /> Private
      <input type="checkbox" className="ml-3" name="type" value="Public" checked={type === 'Public'} onChange={onChange} /> Public
      </div>
      <input type="submit" value="Submit Your Review" className="btn btn-block btn-success" />
      {teacherTopicContext.current && (<button className="btn btn-warning btn-block" onClick={clearAll}>Clear</button>)}
    </form>
  )
}

export default TopicForm
