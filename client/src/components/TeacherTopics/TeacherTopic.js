import React, { useContext, useEffect } from 'react';
import TeacherTopicItem from './TeacherTopicItem';
import TeacherTopicContext from '../../context/TeacherContext/teacherTopicContext';


const TeacherTopic = () => {

  const teacherContext = useContext(TeacherTopicContext);

  const { teacherTopics } = teacherContext;

  useEffect(() => {
    teacherContext.teacherGetTopics()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {teacherTopics.map((currTopic) => {
        return <TeacherTopicItem key={currTopic._id} currTopic={currTopic} />
      })}
    </div>
  )
}


export default TeacherTopic
