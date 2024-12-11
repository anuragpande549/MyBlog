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
      <div>
        <Header />
        <main>
          <h1>this is blog</h1>
        <Outlet/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
