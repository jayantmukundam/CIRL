import firebase from 'firebase'
import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { useContext } from 'react/cjs/react.development'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'

import "firebase/firestore";

export default function ProfileScreen() {


        
    const {user,logout} = useContext(AuthContext)

    const fetchName = ()=>{

        // console.log("Name")
        
            firebase.firestore().collection("users").doc(user.uid).get().then((snapshot)=>{
                if(snapshot.exists){
                    console.log(snapshot.data())
                }

                else{
                    console.log('does not exist')
                }
            })
        
        
    } 


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <FormButton buttonTitle='fetchName' onPress={fetchName}/>
            <FormButton buttonTitle='Logout' onPress={()=>logout()}/>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f9fafd',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    text:{
        fontSize:20,
        color:'#333333'
    }
})
