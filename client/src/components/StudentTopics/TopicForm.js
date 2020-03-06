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
    <div className="studentForm">
      <form className="form-group" onSubmit={onSubmit}>
        <input type="text" id="studentid" placeholder="Enter your student ID" name="studentId" value={studentId} onChange={onChange} className="form-control mb-3" />

        <input type="text" id="titleid" placeholder="Topic Title" name="title" value={title} onChange={onChange} className="form-control mb-3" />

        <textarea class="form-control mb-3" id="topicid" name="topic" placeholder="Enter your text here" value={topic} onChange={onChange} rows="3"></textarea>
        <input type="submit" value="Submit Your Work" className="btn btn-block btn-success font-weight-bold" />
      </form>
    </div>
  )
}

export default TopicForm
