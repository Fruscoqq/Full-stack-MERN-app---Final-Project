import React, { useContext } from 'react';
import StudentTopicItem from './StudentTopicItem';
import StudentTopicContext from '../../context/StudentContext/studentTopicContext';


const StudentTopic = () => {

  const studentContext = useContext(StudentTopicContext);

  const { studentTopics } = studentContext;

  return (
    <div>
      {studentTopics.map((currTopic) => {
        return <StudentTopicItem key={currTopic._id} currTopic={currTopic} />
      })}
    </div>
  )
}


export default StudentTopic
