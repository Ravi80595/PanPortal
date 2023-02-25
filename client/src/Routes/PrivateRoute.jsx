import React from 'react'
import { Navigate } from 'react-router-dom'



const PrivateRoute = ({children}) => {
    const isAuth = localStorage.getItem('isAuth');


if(isAuth=="" || isAuth=="undefined" || isAuth==null){
    return <Navigate to="/user/signup"/>
}
  return children
}

export default PrivateRoute

