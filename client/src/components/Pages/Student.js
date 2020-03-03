import React from 'react';
import StudentTopic from '../StudentTopics/StudentTopic';
import TopicForm from '../StudentTopics/TopicForm';
import Navbar from '../Layout/Navbar';

const Student = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h4>Student Page</h4>
        <div className="row">
          <div className="col-6">
            <TopicForm />
          </div>
          <div className="col-6">
            <StudentTopic />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student
