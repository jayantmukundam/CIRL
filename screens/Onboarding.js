import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
export default function OnboardingScreen({navigation}){
    return(
        <Onboarding
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.replace("Login")}
  pages={[
    {
      backgroundColor: '#a6e4d0',
      titleStyles:{
        fontFamily: 'ubuntu-bold',
      },
      subTitleStyles:{
        fontFamily:'ubuntu',
      },
    //   image: <Image source={require('./images/circle.png')} />,
      title: 'Onboarding 1',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    
    {
        backgroundColor: '#fdeb93',
        titleStyles:{
          fontFamily: 'ubuntu-bold',
        },
        subTitleStyles:{
          fontFamily:'ubuntu',
        },
      //   image: <Image source={require('./images/circle.png')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})