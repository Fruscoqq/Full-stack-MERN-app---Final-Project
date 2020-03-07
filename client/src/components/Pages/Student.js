import React from 'react';
import StudentTopic from '../StudentTopics/StudentTopic';
import TopicForm from '../StudentTopics/TopicForm';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Alert from '../Layout/Alert';

const Student = () => {
  return (
    <div className="studentMain">
      <div id="studentSection">
        <Navbar />
        <div className="container">
          <Alert />
          <div id="student">
            <h3 className="text-center text-light font-weight-bold pb-5">Submit Your Proposal</h3>
            <div className="row">
              <div className="col-md-6 student1">
                <TopicForm />
              </div>
              <div className="col-md-6 student2 border-dark rounded">
                <StudentTopic />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Student
