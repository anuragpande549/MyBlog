import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logOut } from '../redux/userSlice'


function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHqandler = () =>{
        authService.logOut().then(()=>{
            dispatch(logOut())
        })
    }

  return (
    <div>
      <button>Log Out</button>
    </div>
  )
}

export default LogoutBtn
