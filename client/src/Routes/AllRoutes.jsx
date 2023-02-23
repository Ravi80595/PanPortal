import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Customer/CardStatus'
import Signup from "../Pages/Customer/Signup"
import Auth from "../Pages/Customer/Auth"
import Applynewcard from "../Pages/Customer/Applynewcard"
import CardStatus from '../Pages/Customer/CardStatus'

const AllRoutes = () => {

return (
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/user/signup" element={<Signup/>}></Route>
     <Route path="/user/auth" element={<Auth/>}></Route>
     <Route path="/applynewcard" element={<Applynewcard/>}></Route>
     <Route path="/cardstatus" element={<CardStatus/>}></Route>
    </Routes>
  )
}

export default AllRoutes
