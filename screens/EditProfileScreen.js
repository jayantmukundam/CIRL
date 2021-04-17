import React from 'react'
import { View, Text, StyleSheet,Button } from "react-native"

export default function EditProfileScreen() {
    return (
        <View>
            <Button
            title="Click here"
            onPress={()=>alert('Button clicked')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
