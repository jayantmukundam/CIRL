import firebase from "firebase"
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useContext } from "react/cjs/react.development"
import FormButton from "../components/FormButton"
import { AuthContext } from "../navigation/AuthProvider"

import "firebase/firestore"

export default function ProfileScreen() {
    const { user, logout } = useContext(AuthContext)
    const [name, setName] = useState("")
    const fetchName = () => {
        // console.log("Name")
        firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setName(snapshot.data().name)
                    console.log(snapshot.data().name)
                } else {
                    console.log("does not exist")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {name}</Text>
            <FormButton buttonTitle="fetchName" onPress={fetchName} />
            <FormButton buttonTitle="Logout" onPress={() => logout()} />
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
