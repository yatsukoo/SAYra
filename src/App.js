import Header from './components/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Essay from './components/pages/Essay';
import Courses from './components/pages/Courses';
import Edu from './components/pages/Edu';
import Profile from './components/pages/Profile';
import Materials from './components/pages/Materials';
import Programs from './components/pages/Programs';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/essay' element={<Essay />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/edu' element={<Edu />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/materials' element={<Materials/>}/>
          <Route path='/programs' element={<Programs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
