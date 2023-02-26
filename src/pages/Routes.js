import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CustomRoutes() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/*' element={<Frontend/>} />
          <Route path='/auth/*' element={<Auth/>} />
          <Route path='/dashboard/*' element={<Dashboard/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
