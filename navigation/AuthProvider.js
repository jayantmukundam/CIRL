import React,{createContext,useState} from 'react'
import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from 'react-native'
import * as Google from 'expo-google-app-auth';

import { LogBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [user,setUser] = useState(null)

    const [loggedInWithGoogle,setLoggedInWithGoogle] = useState(false)

    
    
    return (
        <AuthContext.Provider
        value={{
            user,
            setUser,
           loggedInWithGoogle,
           setLoggedInWithGoogle,
            login:async(email, password)=>{
              try {
                await firebase
                   .auth()
                   .signInWithEmailAndPassword(email, password);
               } catch (err) {
                 Alert.alert("There is something wrong!", err.message);
               }
            },
            register:async(email,password,name)=>{
              try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const currentUser = firebase.auth().currentUser;
            
                const db = firebase.firestore();

                
                db.collection("users")
                  .doc(currentUser.uid)
                  .set({
                    email: currentUser.email,
                    name: name,
                    
                  });
              } catch (err) {
                Alert.alert("There is something wrong!!!!", err.message);
              }
            },
            googleLogin:()=> {



              try{
                const currentUser = firebase.auth().currentUser;

                const db = firebase.firestore();
                
                db.collection("users")
                  .doc(currentUser.uid)
                  .set({
                    email: currentUser.email,
                    name: currentUser.displayName,
                    
                  });
              }catch (err) {
                Alert.alert("There is something wrong!!!!", err.message);
              }
            },


            logout:async()=>{
              try {
                await firebase.auth().signOut();
              } catch (err) {
                Alert.alert('There is something wrong!', err.message);
              }
            },
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
