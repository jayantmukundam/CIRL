import React,{createContext,useState} from 'react'
import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from 'react-native'
import * as Google from 'expo-google-app-auth';
export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [user,setUser] = useState(null)
    return (
        <AuthContext.Provider
        value={{
            user,
            setUser,
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
            googleLogin:async()=> {
                try {
                  const result = await Google.logInAsync({
                      behavior:'web',
                    androidClientId: 13474305420-fed85664a5s6kd5f3bdk1qi8epjmq0ke.apps.googleusercontent.com,
                    
                    scopes: ['profile', 'email'],
                  });
              
                  if (result.type === 'success') {
                    return result.accessToken;
                  } else {
                    return { cancelled: true };
                  }
                } catch (e) {
                  return { error: true };
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
