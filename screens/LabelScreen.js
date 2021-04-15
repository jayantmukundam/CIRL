import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

export default function LabelScreen() {
    // 1. data json
    // 2. process data rating
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9fafd",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: "#333333",
    },
})
