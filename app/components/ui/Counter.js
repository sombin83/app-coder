"use client"

import { useState } from "react";
import React from "react"
import Boton from "./Boton"

const Counter=()=>{

const[counter, setCounter]=useState(1)

const increase=()=>setCounter(counter+1)
const decrease=()=>{
    if (counter!=1) 
    setCounter(counter-1)
    
 }
 

return(

    <div className="flex items-center gap-3">
        
        <Boton onClick={decrease} className="hover:bg-amber-900"> - </Boton>
        <p>{counter}</p>
        <Boton onClick={increase} className="hover:bg-amber-900"> + </Boton>
        
    </div>

)

}

export default Counter