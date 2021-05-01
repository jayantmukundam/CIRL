import React from 'react'
import { View, Text ,StyleSheet,Button,Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Divider } from 'react-native-elements';

import { windowHeight, windowWidth } from "../utils/Dimensions"

const data=require('../assets/products.json')
export default function LabelScreen() {

    return (

        
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={{fontWeight:'bold'}}>CIRL</Text> 
            </View>
           

            <Divider style={{backgroundColor:'black'}}/>


            <View style={styles.ratingPart}>
                    <View style={{height:hp('50%'),width:wp('66%')}}>
                            <Image source={require('../assets/ratings.png')} style={{width:"100%",height:"100%",resizeMode:'contain'}} />
                    </View>  

                    <View style={{width:wp('33%'),height:hp('50%'),marginTop:10,padding:10}}>
                        {/* <View style={{marginTop:60}}></View>
                         <Image source={require('../assets/arrowB.png')} style={{width:"70%",resizeMode: 'contain'}} /> */}
                        <Text style={styles.ratings}>B</Text>
                         {/* <Image source={require('../assets/arrowB.png')} style={{width:"70%",resizeMode: 'contain',marginTop:50}} /> */}
                    
                    </View> 
                
                    
          
            </View>
            

            {/* <Text style={styles.text}>Energy Efficiency Index {data.details.energyEfficiencyIndex}</Text> */}

            

            <Divider style={{backgroundColor:'black'}} />

            <View style={styles.energyConsumption}>

                <Text style={styles.energyconsText}>{data.details.energyConsPerCycle}</Text>
                <Image source={require('../assets/energycons.png')} style={{height:hp('5%'),width:"30%",resizeMode:"contain"}}/>
            </View>
            
            <Divider style={{backgroundColor:'black'}} />


            <View style={{}}>

            

                    <View style={styles.first}>
                    
                            <View style={styles.ratedcap}>
                                <Image source={require('../assets/ratedcap.png')} style={{height:hp('7%'),width:wp('20%'),resizeMode:"contain"}}></Image>
                                <Text style={styles.ratedText}>{data.details.ratedCapacity}</Text>
                            </View> 

                            <View style={styles.duration}>
                                <Image source={require('../assets/duration.png')} style={{height:hp('7%'),width:wp('20%'),resizeMode:"contain"}}></Image>
                                <Text style={styles.durationText}>{data.details.programmeDurationHalf}</Text>
                            </View>

                            <View style={styles.watercons}>
                                <Image source={require('../assets/watercons.png')} style={{height:hp('7%'),width:wp('20%'),resizeMode:"contain"}}></Image>
                                <Text style={styles.waterText}>{data.details.waterCons}</Text>
                            </View>
                    </View>

                    <View style={styles.second}>
                        <View style={styles.spin}>
                            <Image source={require('../assets/spin.png')} style={{height:hp('7%'),width:wp('20%'),resizeMode:"contain",marginLeft:20}}></Image>
                            <Text style={styles.spintext}>'{data.details.spinClass}'</Text>
                        </View>

                        <View style={styles.noise}>
                            <Image source={require('../assets/noise.png')} style={{height:hp('7%'),width:wp('18%'),resizeMode:"contain",marginLeft:20}}></Image>
                            <Text style={styles.noisetext}>{data.details.noise}</Text>
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
        // height:windowHeight/2,
        //  backgroundColor:'blue',
        height: hp('50%'),
        
         flexDirection:'row'
    },
    ratings:{
        //backgroundColor:'black',
        fontSize:60,
        textAlign:'center',
        marginLeft:30,
        borderRadius:20,
        borderWidth:3, 
        borderColor:'aqua',
    },
    first:{
        flexDirection: 'row',
        margin:10,
        //backgroundColor:'red',
        // height:windowHeight/8
        height: hp('10%')
        
    },
    second:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height: hp('10%'),
        // height:windowHeight/8,
        //backgroundColor: 'black',
    },
    ratedcap:{
        width:wp('33%') ,
        // borderRadius:20,
        // borderWidth:3, 
        // borderColor:'aqua',  
        // padding:2,
        //backgroundColor: 'black',
        marginRight:3,
    },
    duration:{
        width:wp('33%'),
        // borderRadius:20,
        // borderWidth:3, 
        // borderColor:'aqua',
        // padding:2,
        marginRight:3,  
    },
    watercons:{
        width:wp('33%'),
        // borderRadius:20,
        // borderWidth:3, 
        // borderColor:'aqua',
        // padding:2,
    },
    noise:{
        width:wp('50%'),
        // borderRadius:20,
        // borderWidth:3, 
        // borderColor:'aqua',
        // padding:2,
        marginLeft:10,
    },
    spin:{
        padding:20,
        width:wp('50%'),
        // borderRadius:20,
        // borderWidth:3, 
        // borderColor:'aqua',
        // padding:2,
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
    spintext:{
        fontSize:18,
        marginTop:10,
        marginLeft:50   
    },
    noisetext:{
        fontSize:18,
        marginTop:10,
        marginLeft:40   
    },
})