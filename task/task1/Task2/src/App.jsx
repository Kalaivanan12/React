import React from 'react'
import { useForm } from 'react'
import './App.css'
import RegForm from './RegFrom'
import { Link, Route, Routes } from 'react-router-dom'
import Sample from './Sample'
import Demo from './Demo'


function App() {
  return (
    <div className="App">
      {/* <Link to="/">Home</Link>
      <Link to="/service">Service</Link>
      <Link to="/abb">About</Link>
      <Link to="/con">Contact</Link> */}

      <Routes>
        <Route path='/' element={<Sample />}/>
        <Route path='/service' element={<RegForm />}/>
        <Route path='/con' element={<Demo />}/>
        <Route path='/abb' element={<Demo />}/>
        <Route path='*' element={<Demo />}/>
      </Routes>
    </div>
  )
}

export default App
