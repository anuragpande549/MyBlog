import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logOut } from './redux/userSlice';
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"
import {Outlet} from "react-router-dom"

function App() {

  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch((login({userData})))
    }else {
      dispatch((logOut()))
    }
  })
  .catch()
  .finally(()=>setLoading(false))
  },[])


  return (
    <>
<div className="flex flex-col min-h-screen">
    <Header className="bg-gray-800 text-white p-4" />
    <main className="flex-grow bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">This is Blog</h1>
        <Outlet />
    </main>
    <Footer className="bg-gray-800 text-white p-4" />
</div>

    </>
  );
}

export default App;
