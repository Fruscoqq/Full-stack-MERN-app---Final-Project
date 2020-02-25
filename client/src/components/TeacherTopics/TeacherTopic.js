import React, { useContext } from 'react';
import TeacherTopicItem from './TeacherTopicItem';
import TeacherTopicContext from '../../context/TeacherContext/teacherTopicContext';


const TeacherTopic = () => {

  const teacherContext = useContext(TeacherTopicContext);

  const { teacherTopics } = teacherContext;

  return (
    <div>
      {teacherTopics.map((currTopic) => {
        return <TeacherTopicItem key={currTopic.id} currTopic={currTopic} />
      })}
    </div>
  )
}


export default TeacherTopic
