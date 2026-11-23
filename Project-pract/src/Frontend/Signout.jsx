import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signout = () => {
    const navigate=useNavigate()

    const handleSignout=()=>{
        localStorage.removeItem("user")
        navigate("/")
    }
  return (
    <div>
        <button
      onClick={handleSignout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
    >
      Sign Out
    </button>
      
    </div>
  )
}

export default Signout
