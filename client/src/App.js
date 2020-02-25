import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Student from './components/Pages/Student';
import Teacher from './components/Pages/Teacher';

import StudentTopicState from './context/StudentContext/studentTopicState';
import TeacherTopicState from './context/TeacherContext/teacherTopicState';

const App = () => {
  return (
    <div className="App">
      <TeacherTopicState>
        <StudentTopicState>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path='/student' component={Student} />
                <Route exact path='/teacher' component={Teacher} />
              </Switch>
            </div>
          </Router>
        </StudentTopicState>
      </TeacherTopicState>
    </div>
  );
}

export default App;
