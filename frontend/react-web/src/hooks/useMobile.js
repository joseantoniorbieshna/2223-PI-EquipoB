import React from "react";
import { useState } from "react";

export default function useMobile(){
    const [isMobile,setIsMobile] = useState()
    const withValueScreen= 1000

    const getIsMobile = ()=>{setIsMobile(window.innerWidth < withValueScreen?true:false)}

    return [isMobile,getIsMobile]
}