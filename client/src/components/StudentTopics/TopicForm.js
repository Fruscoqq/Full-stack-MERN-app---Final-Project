import React, { useContext, useState } from 'react';
import StudentTopicContext from '../../context/StudentContext/studentTopicContext';
import AlertContext from '../../context/Alert/alertContext';

const TopicForm = () => {

  const studentTopicContext = useContext(StudentTopicContext);
  const alertContext = useContext(AlertContext);

  const [proposal, setProposal] = useState({
    "studentId": '',
    "title": '',
    "topic": ''
  })

  const { studentId, title, topic } = proposal;

  const onChange = (e) => {
    setProposal({
      ...proposal,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (studentId === '' || title === '' || topic === '') {
      alertContext.setAlert('danger', 'Please fill in all fields')
    } else {
      studentTopicContext.addTopic(proposal);
      setProposal({
        "studentId": '',
        "title": '',
        "topic": ''
      })
    }
  }

  return (
    <form className="form-group" onSubmit={onSubmit}>
      <h4 className="text-primary text-center">Add New Topic</h4>
      <label htmlFor="studentid">Student ID</label>
      <input type="text" id="studentid" placeholder="Enter your student ID" name="studentId" value={studentId} onChange={onChange} className="form-control mb-3" />
      <label htmlFor="titleid">Title</label>
      <input type="text" id="titleid" placeholder="Topic Title" name="title" value={title} onChange={onChange} className="form-control mb-3" />
      <label htmlFor="topicid">Topic</label>
      <textarea class="form-control mb-3" id="topicid" name="topic" placeholder="Enter your text here" value={topic} onChange={onChange} rows="3"></textarea>
      <input type="submit" value="Submit Your Work" className="btn btn-block btn-success" />
    </form>
  )
}

export default TopicForm
