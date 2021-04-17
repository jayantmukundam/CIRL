import React from 'react'
 import { AuthProvider } from './AuthProvider'
import Routes from './Routes'
import Startscreen from "../screens/startscreen.js"


export default function Providers(){
    return (
          <AuthProvider>
            <Routes/>
         </AuthProvider>
            
        
        
    )
}