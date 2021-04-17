import React from 'react'
import { View, Text ,StyleSheet,Button,Image} from 'react-native'
import { Divider } from 'react-native-elements';

import { windowHeight, windowWidth } from "../utils/Dimensions"

const data=require('../assets/products.json')
export default function LabelScreen() {

    const margin=10
    return (

        
        <View style={styles.container}>

            <View style={styles.title}>
                <Text>ENERGY LABEL BELOW {}</Text> 
            </View>
           

            <Divider style={{backgroundColor:'black'}}/>


            <View style={styles.ratingPart}>
                    <View style={{height:"100%",width:2*windowWidth/3}}>
                            <Image source={require('../assets/ratings.png')} style={{width:"100%",height:"100%",resizeMode:'contain'}} />
                    </View>  

                    <View style={{width:windowWidth/3,height:"100%"}}>
                        <View style={{marginTop:60}}></View>
                         <Image source={require('../assets/arrowB.png')} style={{width:"70%",resizeMode: 'contain'}} />

                         {/* <Image source={require('../assets/arrowB.png')} style={{width:"70%",resizeMode: 'contain',marginTop:50}} /> */}
                    
                    </View> 
                
                    
          
            </View>
            

            {/* <Text style={styles.text}>Energy Efficiency Index {data.details.energyEfficiencyIndex}</Text> */}

            

            <Divider style={{backgroundColor:'black'}} />

            <View style={styles.energyConsumption}>
                <Text style={styles.energyconsText}>{data.details.energyCons}</Text>
                <Image source={require('../assets/energycons.png')} style={{height:"190%",width:"30%",resizeMode:"contain"}}/>
            </View>
            
            <Divider style={{backgroundColor:'black'}} />

            <View style={{}}>

            

                    <View style={styles.first}>
                    
                            <View style={styles.ratedcap}>
                                <Image source={require('../assets/ratedcap.png')} style={{height: "70%",width:"50%",resizeMode:"contain"}}></Image>
                                <Text style={styles.ratedText}>{data.details.ratedCapacity}</Text>
                            </View> 

                            <View style={styles.duration}>
                                <Image source={require('../assets/duration.png')} style={{height:"60%",width:"50%",resizeMode:"contain"}}></Image>
                                <Text style={styles.durationText}>{data.details.programmeDurationHalf}</Text>
                            </View>

                            <View style={styles.watercons}>
                                <Image source={require('../assets/watercons.png')} style={{height:"60%",width:"50%",resizeMode:"contain"}}></Image>
                                <Text style={styles.waterText}>{data.details.waterCons}</Text>
                            </View>
                    </View>

                    <View style={styles.second}>
                        <View style={styles.spin}>
                        <Image source={require('../assets/spin.png')} style={{height:"80%",width:"50%",resizeMode:"contain",marginLeft:20}}></Image>
                            <Text>Spin class '{data.details.spinClass}' </Text>
                        </View>

                        <View style={styles.noise}>
                        <Image source={require('../assets/noise.png')} style={{height:"50%",width:"50%",resizeMode:"contain",marginLeft:20}}></Image>
                            <Text>Airbone Noise Emissions {data.details.noise}</Text>
                        </View>
                    
                    </View> 

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        
    },
    title:{
        padding:20,
        marginTop:20,
        alignItems:'center',
        
    },
    text:{
        fontSize:20,
        color:'#333333',
    
    },
    energyConsumption:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        marginBottom:15,
        flexDirection:'row',
        // backgroundColor:'black'
    },
    ratingPart:{
        height:windowHeight/2,
        //  backgroundColor:'blue',
        
         flexDirection:'row'
    },
    ratings:{
        // backgroundColor:'black',
        
    },
    first:{
        flexDirection: 'row',
        margin:10,
        // backgroundColor:'red',
        height:windowHeight/8
        
    },
    second:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:windowHeight/8,
        //  backgroundColor: 'black',
    },
    ratedcap:{
        width:windowWidth/3,
        
    },
    duration:{
        width:windowWidth/3,
    },
    watercons:{
        width:windowWidth/3,
    },
    noise:{
        width:windowWidth/2,
    },
    spin:{
        padding:20,
        width:windowWidth/2,
    },
    energyconsText:{
        fontSize:18,
    },
    ratedText:{
        fontSize:18,
        marginLeft:10
    },
    durationText:{
        fontSize:18,
        marginTop:10,
        marginLeft:20
    },
    waterText:{
        fontSize:18,
        marginTop:10,
        marginLeft:20
    },
})