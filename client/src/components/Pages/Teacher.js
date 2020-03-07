import React from 'react';
import TeacherTopic from '../TeacherTopics/TeacherTopic';
import TopicForm from '../TeacherTopics/TopicForm';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Teacher = () => {
  return (
    <div>
      <Navbar />
      <div id="teacher">
        <div className="container">
          <h2 className="font-weight-bold text-warning text-center py-3">Teacher page</h2>
          <div className="bgContainer p-3">
            <h4 className="text-primary text-center py-3">Review Student Proposals</h4>
            <div className="row">
              <div className="col-md-6 teacher1">
                <TopicForm />
              </div>
              <div className="col-md-6 teacher2">
                <TeacherTopic />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Teacher
