import React, { useContext } from 'react';
import TeacherTopicContext from '../../context/TeacherContext/teacherTopicContext';

const TeacherTopicItem = ({ currTopic }) => {

  const { _id, studentId, title, topic, feedback, grade, type } = currTopic;

  const teacherTopicContext = useContext(TeacherTopicContext);

  const onDelete = () => {
    teacherTopicContext.deleteTopic(_id);
    teacherTopicContext.clearCurrent();
  }


  return (
    <div className="card bg-light p-2 my-1">
      <p>{_id}</p>
      <h4 className="text-info text-left">ID: {studentId}</h4>
      <p><i class="fas fa-bookmark text-success" /> Title: {title}</p>
      <p><i class="fas fa-book-open text-info" /> Topic: {topic}</p>
      {feedback && (
        <p> Feedback: {feedback}</p>
      )}
      {grade && (
        <p> Grade: {grade}</p>
      )}
      <p>Type: {type}</p>
      <div>
        <button className="btn btn-dark btn-sm mr-1" onClick={() => teacherTopicContext.setCurrent(currTopic)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TeacherTopicItem
