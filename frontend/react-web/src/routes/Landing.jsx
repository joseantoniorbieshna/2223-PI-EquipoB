import Header from '../components/Header'
import MainLanding from '../components/MainLanding'
import "./Landing.css"
import "../components/css/Header.css"
import "../components/css/MainLanding.css"

import { getCookie } from "../utils/cookies";
import { Navigate } from "react-router-dom";
import useSession from '../hooks/useSession'
import { useEffect } from 'react'

export default function Landing() {
  const [session,getSession] = useSession()
  useEffect(()=>{
    getSession()
  },[])
  
  return (
    <>
    {/*Si hay session y es diferente de no login, redirigir al home*/}
    {session && session!="no login" &&( <Navigate to="/home" replace={true} />)}

    {session=="no login" &&(
    <>
      <Header></Header>
      <MainLanding></MainLanding>
    </>
    )}

    </>
  )
}
