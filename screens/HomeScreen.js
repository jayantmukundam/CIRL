import React,{useState,useEffect} from 'react'
import { View, Text ,StyleSheet,Button} from 'react-native'
import { useContext } from 'react/cjs/react.development'
import FormButton from '../components/FormButton'
// import { AuthContext } from '../navigation/AuthProvider'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function HomeScreen({navigation}) {

   

    
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <FormButton buttonTitle='Tap to Scan' onPress={()=>navigation.navigate("BarCode")}/>
           
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
