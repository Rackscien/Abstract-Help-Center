import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Request from './Request';
import Error from './Error.jsx'
export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/request' element={<Request/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
