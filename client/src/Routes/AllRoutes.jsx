import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Customer/CardStatus'
import Signup from "../Pages/Customer/Signup"
import Auth from "../Pages/Customer/Auth"
import Applynewcard from "../Pages/Customer/Applynewcard"
import CardStatus from '../Pages/Customer/CardStatus'
import Correction from '../Pages/Customer/Correction'
import Admindocument from '../Pages/Admin/Admindocument'
import Correctiondocuments from '../Pages/Admin/Correctiondocuments'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {

return (
    <Routes>
     <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
     <Route path="/user/signup" element={<Signup/>}></Route>
     <Route path="/user/auth" element={<Auth/>}></Route>
     <Route path="/applynewcard" element={<Applynewcard/>}></Route>
     <Route path="/cardstatus" element={<CardStatus/>}></Route>
     <Route path="/correction" element={<Correction/>}></Route>
     <Route path="/applieddocuments" element={<Admindocument/>}></Route>
     <Route path="/correctiondocuments" element={<Correctiondocuments/>}></Route>

    </Routes>
  )
}

export default AllRoutes
