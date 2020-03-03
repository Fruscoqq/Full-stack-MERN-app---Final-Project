import React from 'react';
import TeacherTopic from '../TeacherTopics/TeacherTopic';
import TopicForm from '../TeacherTopics/TopicForm';
import Navbar from '../Layout/Navbar';

const Teacher = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h4>Teacher page</h4>
        <div className="row">
          <div className="col-6">
            <TopicForm />
          </div>
          <div className="col-6">
            <TeacherTopic />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teacher
