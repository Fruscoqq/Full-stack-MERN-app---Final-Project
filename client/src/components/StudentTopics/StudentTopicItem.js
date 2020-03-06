import React from 'react';

const StudentTopicItem = ({ currTopic }) => {

  const { _id, studentId, title, topic, feedback, grade } = currTopic;

  return (
    <div className="cardParent my-1">
      <div className="card p-3">
        <h4 className="text-left">ID: {studentId}</h4>
        <p><i class="fas fa-bookmark text-success" /> Title: {title}</p>
        <p><i class="fas fa-book-open text-info" /> Topic: {topic}</p>
        {feedback && (
          <p className="text-left p-2 rounded feedback">{feedback}</p>
        )}
        {grade && (
          <p className="text-light text-left p-2 rounded grade">{grade}</p>
        )}
        <div>
        </div>
      </div>
    </div>
  )
}

export default StudentTopicItem
