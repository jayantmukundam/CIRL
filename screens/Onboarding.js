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
        fontFamily: 'ubuntu',
        fontSize:40,
      },
      subTitleStyles:{
        fontFamily:'ubuntu',
        fontSize:30,
      },
      image: <Image 
      source={require('../assets/images/barcode.png')} 
      style={{width:200 ,height:200,}}
      />,
      title: '',
      subtitle: 'Click on Tap to Scan ,then scan the  Barcode',
      
      
    },
    {
     
     backgroundColor: '#38334f',
     titleStyles:{
       fontFamily: 'ubuntu',
       fontSize:40,
     },
     subTitleStyles:{
       fontFamily:'ubuntu',
       fontSize:30,
     },
     image: <Image 
     source={require('../assets/images/readlabel.png')} 
     style={{width:200 ,height:200,}}
     />,
     title: '',
     subtitle: 'You will be Redirected to Label Page where you can Read our CIRL',
     
     
   },
    {
     
     backgroundColor: '#38334f',
     titleStyles:{
       fontFamily: 'ubuntu',
       fontSize:40,
     },
     subTitleStyles:{
       fontFamily:'ubuntu',
       fontSize:30,
       
     },
     image: <Image 
     source={require('../assets/images/label.jpeg')} 
     style={{width:200 ,height:400,}}
     />,
     title: '',
     subtitle: 'The user can also select thier particular product to view the label from the list of appliances',
     
     
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
