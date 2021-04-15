import React, { useState, useEffect } from "react"
import { View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/Login"
import OnboardingScreen from "../screens/Onboarding"
import AsyncStorage from "@react-native-async-storage/async-storage"
import SignUpScreen from "../screens/SignUpScreen"

const Stack = createStackNavigator()

export default function AuthStack() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    let routeName

    useEffect(() => {
        AsyncStorage.getItem("alreadyLaunched").then((value) => {
            if (value == null) {
                AsyncStorage.setItem("alreadyLaunched", "true")
                setIsFirstLaunch(true)
            } else {
                setIsFirstLaunch(false)
            }
        })
    }, [])

    if (isFirstLaunch === null) {
        return null
    } else if (isFirstLaunch == true) {
        routeName = "Onboarding"
    } else {
        routeName = "Onboarding"
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    )
}
