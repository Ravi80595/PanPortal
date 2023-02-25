import React from 'react'
import { Navigate } from 'react-router-dom'


const AdminPrivateRoute = ({children}) => {
    const isAuth = localStorage.getItem('isAdminAuth');

if(isAuth==" " || isAuth=="undefined" || isAuth==='null' || isAuth==null){
    return <Navigate to="/admin/login"/>
}
  return children
}

export default AdminPrivateRoute

