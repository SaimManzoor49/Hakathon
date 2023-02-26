import React, { useContext } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import { AuthContext } from '../../context/Authcontext'
import Frontend from '../Frontend'



export default function Index() {
const {userr} = useContext(AuthContext);

const navigate = useNavigate();

if(userr.uid){
  navigate('/')
}

  return (
    <>
    <Routes >
      <Route path='/login'  element={  userr.uid?<Frontend />:<Login />}  />
      <Route path='/signup'  element={userr.uid?<Frontend />:<Register />}/>
      <Route path='/forgetpassword'  element={userr.uid?<Frontend />:<ForgetPassword />}/>
    </Routes>
    </>
  )
}
