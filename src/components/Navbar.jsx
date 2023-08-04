import React from 'react'
import { userAuth } from '../context/AuthContext'

const Navbar = () => {

  const {currentUser, logout} = userAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content">
        <div className="containerWrapper flex justify-between items-center">
        <a className="btn btn-ghost normal-case text-xl">InstantChat</a>
        {currentUser ?
          <button onClick={handleLogout} className="">Logout</button>
          : ""}
        </div>
    </div>
  )
}

export default Navbar