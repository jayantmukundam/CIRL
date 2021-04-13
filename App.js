import React from "react"
import Providers from "./navigation/index"
import * as firebase from "firebase"
import apiKeys from "./config/keys"
import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"

if (firebase.apps.length === 0) {
    firebase.initializeApp(apiKeys.firebaseConfig)
}

export default function App() {
    const [fontsLoaded] = useFonts({
        ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
        "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return <Providers />
    }
}
