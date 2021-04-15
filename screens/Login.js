import React,{useState} from 'react';
import { Button, StyleSheet, Text, Touchable, View } from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignUp from './SignUpScreen';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../navigation/AuthProvider';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as firebase from 'firebase'




export default function Login({navigation}){

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const {login,setLoggedInWithGoogle} = useContext(AuthContext)


    const handleGoogleLogin=()=>{
      setLoggedInWithGoogle(true)
    }

    const handleNormalLogin=()=>{
      setLoggedInWithGoogle(false)
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

    return(
        <View style={styles.container}>
            {/* <AntDesign name="user" size={25} color="black" />
            <Text>Login Screen</Text>
            <Button
            title="Click Here"
            onPress={()=>navigation.navigate("SignUp")}
            /> */}
            <FormInput
            labelValue={email}
            onChangeText={(userEmail)=>setEmail(userEmail)}
            placeHolderText="Email"
            iconType="email"
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

            <FormButton 
            buttonTitle="Sign In"
            onPress={()=>{login(email,password);handleNormalLogin()}}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
                <Text style={styles.navButton}>Forgot Password?</Text>
            </TouchableOpacity>

            

            <Text style={styles.navButton}>or</Text>


            <SocialButton
            buttonTitle="Sign In with Google"
            buttonType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            
            onPress={()=>{ promptAsync();handleGoogleLogin()}}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={()=>{navigation.navigate('SignUp')}}>
                <Text style={styles.navButton}>Don't have an Account? Create Here</Text>
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
    
    navButton: {
      marginTop: 15,
      fontFamily:'ubuntu'
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    //   fontFamily: 'Lato-Regular',
    },
  });
