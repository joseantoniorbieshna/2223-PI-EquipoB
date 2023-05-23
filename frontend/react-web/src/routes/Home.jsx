import Header from "../components/Header";
import WebContainer from "../components/WebContainer";
// import "./Home.css"
import "./Home-mobile.css"
import {getCookie} from "../utils/cookies"
import useSession from "../hooks/useSession";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [session,getSession] = useSession()
  useEffect(()=>{
    getSession()
  },[])
  
  return (
    <>
    {/*Si no hay sesion te lleva al home*/}
    {session=="no login" &&( <Navigate to="/" replace={true} />)}
    {session && session!="no login" &&(
      <>
        <Header user={session}/>
        <WebContainer/>
      </>
    )}
    </>
  )
}
