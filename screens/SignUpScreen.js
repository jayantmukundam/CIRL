import React,{useState,useContext} from 'react';
import { Button, StyleSheet, Text, Touchable, View } from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AuthContext} from '../navigation/AuthProvider'
import {registration} from '../api/firebaseMethods'




export default function SignUp({navigation}){

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirmPassword,setConfirmPassword]=useState()

      const {register} = useContext(AuthContext)
    

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>


            <FormInput
            labelValue={email}
            onChangeText={(userEmail)=>setEmail(userEmail)}
            placeHolderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect = {false}
            />

            <FormInput
            labelValue={password}
            onChangeText={(userPassword)=>setPassword(userPassword)}
            placeHolderText="Password"
            iconType="lock"
            secureTextEntry={true}
            />

            <FormInput
            labelValue={confirmPassword}
            onChangeText={(userConfirmPassword)=>setConfirmPassword(userConfirmPassword)}
            placeHolderText="Confirm Password"
            iconType="lock"
            secureTextEntry={true}
            />

            <FormButton 
            buttonTitle="Sign Up"
             onPress={()=> register(email,password)}
            // onPress={()=> {}}
            />

           

            <SocialButton
            buttonTitle="Sign Up with Facebook"
            buttonType="facebook-official"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={()=>{}}
            />

            <SocialButton
            buttonTitle="Sign Up with Google"
            buttonType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={()=>{}}
            />

            <TouchableOpacity style={styles.navButton} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.navButton}>Have an Account? Sign In</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    // logo: {
    //   height: 150,
    //   width: 150,
    //   resizeMode: 'cover',
    // },
    text: {
    //   fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    //   fontFamily: 'Lato-Regular',
    },

    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
  });
