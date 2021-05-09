import React from 'react'
import { Text, View, StyleSheet, Button } from "react-native"

export default function FridgeLabelScreen() {
    return (
        <View>
            <View style={styles.title}>
                <Text style={{fontFamily:'ubuntu-bold'}}>REFRIGERATOR</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        padding:20,
        marginTop:20,
        alignItems:'center',
        
    },
})
