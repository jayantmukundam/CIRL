import React,{useState,useEffect} from 'react'
import { View, Text ,StyleSheet,Button,TouchableOpacity} from 'react-native'
import { useContext } from 'react/cjs/react.development'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import "firebase/firestore";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function HomeScreen({navigation}) {
    const {googleLogin,loggedInWithGoogle} = useContext(AuthContext)
        if(loggedInWithGoogle)
            googleLogin()
    return (
        // </View>
        <View>
            <View style={styles.title}>
                <Text style={{fontFamily:'ubuntu-bold'}}>HOME SCREEN</Text> 
            </View>

            <View style={styles.firstRow}>
            <TouchableOpacity
                 onPress={() => {
                    
                    navigation.navigate('ViewWashingMachineList', {
                      otherParam: 'washing machine',
                    });
                  }}
                 style={{width:wp('30%')}}>                    
                 <MaterialCommunityIcons name="washing-machine" size={50} color="black" />
                    <Text style={styles.text}>Washing Machine</Text>
                </TouchableOpacity>



                <TouchableOpacity
                 onPress={() => {
                    
                    navigation.navigate('BarCode', {
                      otherParam: 'air conditioner',
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
            </View>
            

            
            <View style={styles.thirdRow}>
            
            </View>
            
            
            <FormButton
                buttonTitle="Tap to Scan"
                onPress={() => navigation.navigate('BarCode', {
                    otherParam: '',
                  })}
            />
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
    title:{
        padding:20,
        marginTop:20,
        alignItems:'center',
        
    },
    text: {
        fontFamily:'ubuntu',
        margin:10,
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
})
