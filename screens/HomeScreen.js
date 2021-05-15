import React,{useState,useEffect} from 'react'
import { View, Text ,StyleSheet,Button,Image,TouchableOpacity} from 'react-native'
import { useContext } from 'react/cjs/react.development'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import "firebase/firestore";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { windowHeight } from '../utils/Dimensions'
import { Directions } from 'react-native-gesture-handler'


export default function HomeScreen({navigation}) {
    const {googleLogin,loggedInWithGoogle} = useContext(AuthContext)
        if(loggedInWithGoogle)
            googleLogin()
    return (
      <View style={styles.bk}>
        <View>
            <View style={styles.title}>
               <Image
                 source={require('../assets/images/finallogo.jpeg')}
                 style={{width:50 ,height:50,marginRight:20,}}
                 />
                <Text style={{fontFamily:'ubuntu-bold',fontSize:40,color:'green'}}>CIRL</Text> 
                 
            </View>

            <View style={styles.firstRow}>
            <TouchableOpacity
                 onPress={() => {
                    
                    navigation.navigate('ViewWashingMachineList',{
                      product: 'washing machine',
                    });
                  }}
                 style={{width:wp('30%')}}>                    
                 <MaterialCommunityIcons name="washing-machine" size={50} color="black" />
                    <Text style={styles.text}>Washing Machine</Text>
                </TouchableOpacity>



                <TouchableOpacity
                 onPress={() => {
                    
                    navigation.navigate('ViewAirConditionerList', {
                      product: 'air conditioner',
                    });
                  }}
                 style={{width:wp('30%')}}> 
                <MaterialCommunityIcons name="air-conditioner" size={50} color="black" />
                    <Text style={styles.text}>Air Conditioner</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => {
                    
                    navigation.navigate('BarCode', {
                      otherParam: 'microwave oven',
                    });
                  }}
                 style={{width:wp('30%')}}> 
                    <MaterialCommunityIcons name="microwave" size={50} color="black" />
                    <Text style={styles.text}>Microwave oven</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.secondRow}>
            

                <TouchableOpacity
                 onPress={() => {
                    
                    navigation.navigate('BarCode', {
                      otherParam: 'fridge',
                    });
                  }}
                 style={{width:wp('30%')}}>
                    <MaterialCommunityIcons name="fridge" size={50} color="black" />
                    <Text style={styles.text}>Refrigerator</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => {
                    
                    navigation.navigate('BarCode', {
                      otherParam: 'television',
                    });
                  }}
                 style={{width:wp('30%')}}> 
                    <MaterialCommunityIcons name="television" size={50} color="black" />
                    <Text style={styles.text}>Television</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => {
                    
                    navigation.navigate('BarCode', {
                      otherParam: 'television',
                    });
                  }}
                 style={{width:wp('30%')}}> 
                    <MaterialCommunityIcons name="fan" size={50} color="black" />
                    <Text style={styles.text}>Ceiling Fans</Text>
                </TouchableOpacity>
            </View>
            <FormButton
                buttonTitle="Tap to Scan!"
                onPress={() => navigation.navigate('BarCode', {
                    otherParam: '',
                  })}
            />
          </View>
          </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,  
       
    },
    title:{
        flexDirection:'row',
        justifyContent:'center',
        marginRight:70,
        padding:5,
        marginTop:40,
        alignItems:'center',
        
        
        
    },
    text: {
        fontFamily:'ubuntu',
        margin:10,
        fontSize:15
    },
    firstRow:{
        margin:30,
        flexDirection:'row',
        
    },
    secondRow:{
        margin:30,
        flexDirection:'row',
    },
    thirdRow:{
        marginLeft:120,
        flexDirection:'row',
    },
    bk:{
      backgroundColor:'white',
    }
})
