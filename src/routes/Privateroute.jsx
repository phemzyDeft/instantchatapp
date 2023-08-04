import React from 'react'
import {Navigate} from "react-router-dom"
import { userAuth } from '../context/AuthContext';

const Privateroute = ({children}) => {

  const { currentUser } = userAuth();

    if(!currentUser){
        return <Navigate to="/" replace={true}/>
    }

  return (
    children
  )
}

export default Privateroute