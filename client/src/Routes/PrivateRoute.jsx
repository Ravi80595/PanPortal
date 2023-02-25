import React from 'react'
import { Navigate } from 'react-router-dom'



const PrivateRoute = ({children}) => {
    const isAuth = localStorage.getItem('isAuth');
console.log(typeof(isAuth))

if(isAuth==" " || isAuth=="undefined" || isAuth==='null' || isAuth==null){
    return <Navigate to="/user/auth"/>
}
  return children
}

export default PrivateRoute

