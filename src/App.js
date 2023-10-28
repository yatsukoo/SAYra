import Header from './components/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Essay from './components/pages/Essay';
import Courses from './components/pages/Courses';
import Edu from './components/pages/Edu';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/essay' element={<Essay />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/edu' element={<Edu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
