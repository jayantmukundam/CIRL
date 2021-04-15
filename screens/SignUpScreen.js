import React,{useState,useContext} from 'react';
import { Button, StyleSheet, Text, Touchable, View } from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AuthContext} from '../navigation/AuthProvider'

import * as Google from 'expo-auth-session/providers/google';
import * as firebase from 'firebase'
import {Alert} from 'react-native'





export default function SignUp({navigation}){


  

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirmPassword,setConfirmPassword]=useState()

      const {register,setLoggedInWithGoogle} = useContext(AuthContext)



      const handleGoogleSignUp=()=>{
        setLoggedInWithGoogle(true)
      }

      
      

        const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
          {
            clientId: '13474305420-1lvdv21fir0c19kgo3f3gtf9rcu1fcsj.apps.googleusercontent.com',
  
            },
  
            
            
        );
      
        React.useEffect(() => {
          if (response?.type === 'success') {
            const { id_token } = response.params;
           
            
            const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
            firebase.auth().signInWithCredential(credential);
  
             
           
           
  
             
            
          }
        }, [response]);


    //------------------------Form Validation check starts

    const handlePress = () => {
        

    if (!name) {
      Alert.alert('Email field is required.');
    }
    
    if (!email) {
    Alert.alert('Email field is required.');
  } else if (!password) {
    Alert.alert('Password field is required.');
  } else if (!confirmPassword) {
    
    Alert.alert('Confirm password field is required.');
  } else if (password !== confirmPassword) {
    Alert.alert('Password does not match!');
  } else {

    setLoggedInWithGoogle(false)
    register(
      email,
      password,
      name,
      
    );
    
  }

}


//----------------------------Form validation ends



    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            <FormInput
                labelValue={name}
                onChangeText={(name) => setName(name)}
                placeHolderText="Name"
                iconType="user"
                // keyboardType="email-address"
                // autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeHolderText="Email"
                iconType="email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeHolderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userConfirmPassword) =>
                    setConfirmPassword(userConfirmPassword)
                }
                placeHolderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />


            <FormButton 
            buttonTitle="Sign Up"
              onPress={handlePress}
            
            />

            <Text style={styles.navButton}>or</Text>

            <SocialButton
            buttonTitle="Sign Up with Google"
            buttonType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
             onPress={()=>{ promptAsync();handleGoogleSignUp()}}
            
            />

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                    navigation.navigate("Login")
                }}
            >
                <Text style={styles.navButton}>Have an Account? Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 50,
    },
    // logo: {
    //   height: 150,
    //   width: 150,
    //   resizeMode: 'cover',
    // },
    text: {
        fontFamily: "ubuntu",
        fontSize: 28,
        marginBottom: 10,
        color: "#051d5f",
    },
    navButton: {
        marginTop: 15,
        fontFamily: "ubuntu",
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#2e64e5",
        //   fontFamily: 'Lato-Regular',
    },

    textPrivate: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 35,
        justifyContent: "center",
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: "400",
        fontFamily: "Lato-Regular",
        color: "grey",
    },
})
