import React from 'react';
import { Button, StyleSheet, Text, View,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
export default function OnboardingScreen({navigation}){
    return(
        <Onboarding
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.replace("Login")}
  pages={[
    {
      backgroundColor: '#38334f',
      titleStyles:{
        fontFamily: 'ubuntu-bold',
      },
      titleStyles:{
        fontFamily:'ubuntu',
        fontSize:30,
      },
      image: <Image 
      source={require('../assets/images/Logo2.png')} 
      style={styles.image}
      />,
      title: 'Press Next for Tutorial',
      
    },

    {
     
      backgroundColor: '#38334f',
      titleStyles:{
        fontFamily: 'ubuntu-bold',
        fontSize:40,
      },
      subTitleStyles:{
        fontFamily:'ubuntu-bold',
        fontSize:30,
      },
      image: <Image 
      source={require('../assets/images/barcode.jpg')} 
      style={{width:300 ,height:300,}}
      />,
      title: 'STEP 1',
      subtitle: '->Press Tap to Scan\n->Now Scan the Barcode',
      
      
    },
    {
     
     backgroundColor: '#38334f',
     titleStyles:{
       fontFamily: 'ubuntu-bold',
       fontSize:40,
     },
     subTitleStyles:{
       fontFamily:'ubuntu-bold',
       fontSize:30,
     },
     image: <Image 
     source={require('../assets/images/readlabel.png')} 
     style={{width:300 ,height:300,}}
     />,
     title: 'STEP 2',
     subtitle: '->You will be Redirected to Label Page\n->Read our CIRL',
     
     
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
      },
      image:{
        backgroundColor:'#d5cff3',
        width:'80%',
        height:'80%',
         }
})
