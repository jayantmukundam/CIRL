import React from 'react';
import Providers from './navigation/index'
import * as firebase from 'firebase'
import apiKeys from './config/keys';





if(firebase.apps.length===0){
  firebase.initializeApp(apiKeys.firebaseConfig)
}






export default function App() {

   return <Providers/>
   
 
}