import React from 'react';

const StudentTopicItem = ({ currTopic }) => {

  const { _id, studentId, title, topic, feedback, grade } = currTopic;

  return (
    <div className="card bg-light p-2 my-1">
      <p className="lead">{_id}</p>
      <h4 className="text-info text-left">ID: {studentId}</h4>
      <p><i class="fas fa-bookmark text-success" /> Title: {title}</p>
      <p><i class="fas fa-book-open text-info" /> Topic: {topic}</p>
      {feedback && (<div className="card bg-warning my-2">
        <p className="text-dark">{feedback}</p>
      </div>)}
      {grade && (<div className="card bg-danger my-2">
        <p className="text-light">{grade}</p>
      </div>)}
      <div>
        {/* <button className="btn btn-dark btn-sm mr-1">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button> */}
      </div>
    </div>
  )
}

export default StudentTopicItem
