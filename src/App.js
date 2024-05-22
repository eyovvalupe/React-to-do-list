import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './component/main'
import Register from './component/Signup'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/main' Component={Main} />
        <Route exact path ='/register' Component={Register} />
      </Routes>
    </Router>
  )
}

export default App;
