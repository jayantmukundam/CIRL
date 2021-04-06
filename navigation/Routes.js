import React ,{useEffect,useState,useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import {AuthContext} from './AuthProvider'
import * as firebase from 'firebase'


export default function Routes(){

    const {user,setUser} = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true)

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

      if (initializing) return null;

    return(
        <NavigationContainer>
            {user ? <AppStack/>:<AuthStack/>}
        </NavigationContainer>
    )
}
