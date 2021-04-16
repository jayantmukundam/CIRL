import React from 'react'
import { View, Text ,StyleSheet,Button,Image} from 'react-native'
import { Divider } from 'react-native-elements';

import { windowHeight, windowWidth } from "../utils/Dimensions"

const data=require('../assets/products.json')
export default function LabelScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.title}>
            <Text>ENERGY LABEL BELOW {}</Text> 
            </View>
           

                <Divider style={{backgroundColor:'black'}}/>

            <View style={styles.ratingPart}>
              {/* <View> */}
              <Image source={require('../assets/ratings.png')} style={{flex: 1,width:"70%",resizeMode: 'contain'}} />
            {/* </View>   */}

            {/* <View style={styles.arrow}>

            </View> */}
          
            </View>
            

            {/* <Text style={styles.text}>Energy Efficiency Index {data.details.energyEfficiencyIndex}</Text> */}

            

            <Divider style={{backgroundColor:'black'}} />

            <View style={styles.energyConsumption}>
            <Text style={styles.energyconsText}>{data.details.energyCons}</Text>
            <Image source={require('../assets/energycons.png')} style={{height:"190%",width:"30%",resizeMode:"contain"}}></Image>
            </View>
            
            <Divider style={{backgroundColor:'black'}} />

            <View style={styles.first}>
            
            <View style={styles.ratedcap}>
                <Image source={require('../assets/ratedcap.png')} style={{height: "35%",width:"60%",resizeMode:"contain"}}></Image>
                <Text style={styles.ratedText}>{data.details.ratedCapacity}</Text>
            </View> 

            <View style={styles.duration}>
                <Image source={require('../assets/duration.png')} style={{height:"35%",width:"60%",resizeMode:"contain"}}></Image>
                <Text style={styles.durationText}>{data.details.programmeDurationHalf}</Text>
            </View>

            <View style={styles.watercons}>
                <Image source={require('../assets/watercons.png')} style={{height:"35%",width:"60%",resizeMode:"contain"}}></Image>
                <Text style={styles.waterText}>{data.details.waterCons}</Text>
            </View>
            </View>

            <View style={styles.second}>
            <View style={styles.spin}>
                <Text>Spin class '{data.details.spinClass}' </Text>
            </View>

            <View style={styles.noise}>
                 <Text>Airbone Noise Emissions {data.details.noise}</Text>
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
        flexDirection:'row'
    },
    ratingPart:{
        height:windowHeight/2,
        // flexDirection:'row'
    },
    ratings:{
        // backgroundColor:'black',
        
    },
    first:{
        flexDirection: 'row',
        margin:10,
    },
    second:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'black',
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
    },
    durationText:{
        fontSize:18,
    },
    waterText:{
        fontSize:18,
    },
})