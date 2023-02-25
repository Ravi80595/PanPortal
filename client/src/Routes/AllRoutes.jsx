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
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminSignup from '../Pages/Admin/AdminSignup'
import AdminPrivateRoute from './AdminPrivateRoute'

const AllRoutes = () => {

return (
    <Routes>
     <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
     <Route path="/user/signup" element={<Signup/>}></Route>
     <Route path="/user/auth" element={<Auth/>}></Route>
     <Route path="/applynewcard" element={<PrivateRoute><Applynewcard/></PrivateRoute>}></Route>
     <Route path="/cardstatus" element={<PrivateRoute><CardStatus/></PrivateRoute>}></Route>
     <Route path="/correction" element={<PrivateRoute><Correction/></PrivateRoute>}></Route>
     <Route path="/applieddocuments" element={<AdminPrivateRoute><Admindocument/></AdminPrivateRoute>}></Route>
     <Route path="/correctiondocuments" element={<AdminPrivateRoute><Correctiondocuments/></AdminPrivateRoute>}></Route>
     <Route path="/admin/login" element={<AdminLogin/>}></Route>
     <Route path="/admin/signup" element={<AdminSignup/>}></Route>
    </Routes>
  )
}

export default AllRoutes
