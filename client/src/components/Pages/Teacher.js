import React from 'react';
import TeacherTopic from '../TeacherTopics/TeacherTopic';
import TopicForm from '../TeacherTopics/TopicForm';

const Teacher = () => {
  return (
    <div>
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
  )
}

export default Teacher
