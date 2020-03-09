import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Student from './components/Pages/Student';
import Teacher from './components/Pages/Teacher';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Alert from './components/Layout/Alert';
import PrivateRoute from './components/Routing/PrivateRoute';
import "./css/styles.css"

import StudentTopicState from './context/StudentContext/studentTopicState';
import TeacherTopicState from './context/TeacherContext/teacherTopicState';
import AuthState from './context/AuthContext/authState';
import AlertState from './context/Alert/alertState';

const App = () => {
  return (
    <div className="App">
      <AuthState>
        <TeacherTopicState>
          <StudentTopicState>
            <AlertState>
              <Router>
                {/* <Navbar /> */}
                {/* <Alert /> */}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <PrivateRoute exact path='/student' component={Student} />
                  <PrivateRoute exact path='/teacher' component={Teacher} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </Router>
            </AlertState>
          </StudentTopicState>
        </TeacherTopicState>
      </AuthState>
    </div>
  );
}

export default App;
