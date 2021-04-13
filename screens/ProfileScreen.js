import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { useContext } from 'react/cjs/react.development'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'
import * as firebase from "firebase";
import "firebase/firestore";

export default function ProfileScreen() {

    const {user,logout} = useContext(AuthContext)

    const db = firebase.firestore();
    var docRef = db.collection("users").doc(user.id);

    const name=""

docRef.get().then((doc) => {
    if (doc.exists) {
        // console.log("Document data:", doc.data());
        name = doc.name;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {name}</Text>
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
