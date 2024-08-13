import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Detail, Profile } from './Pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:contact_id' element={<Detail />} />
      <Route path='/profile/:contact_id' element={<Profile />} />
    </Routes>
  )
}

export default App

