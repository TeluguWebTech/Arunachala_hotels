import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import HotelDetails from './components/HotelDetails'
import TopbarComp from './components/TopbarComp'

const App = () => {
  return (
    <div>
      <TopbarComp />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/hotel-details/:id" element={<HotelDetails />} />
      </Routes>
      
    </div>
  )
}

export default App
