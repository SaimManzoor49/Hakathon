import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddEvents from './AddEvents'
import AllEvents from './AllEvents'
import ViewEvent from './ViewEvent'

export default function Index() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addevents' element={<AddEvents />} />
      <Route path='/events' element={<AllEvents />} />
      <Route path='/eventdetails/:id' element={<ViewEvent />} />
    </Routes>
    </>
  )
}
