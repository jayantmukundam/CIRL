import React from 'react'
import { View, Text ,StyleSheet,Button} from 'react-native'

import { windowHeight, windowWidth } from "../utils/Dimensions"

const data=require('../assets/products.json')
export default function LabelScreen() {
    return (
        <View>

            <View>
            <Text>ENERGY LABEL BELOW {}</Text> 
            </View>

            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
            />

            <View style={styles.ratingPart}>

            </View>
            

            {/* <Text style={styles.text}>Energy Efficiency Index {data.details.energyEfficiencyIndex}</Text> */}

            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
            />

            <View style={styles.energyConsumption}>
            <Text>Energy consumption {data.details.energyCons}</Text>
            </View>


            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
            />

            <View>
            <Text>Rated Capacity {data.details.ratedCapacity}</Text>
            </View>
            
            
            <View>
            <Text> Water consumption per cycle (in L) {data.details.waterCons}</Text>
            </View>

            <View>
            <Text>Spin class '{data.details.spinClass}' </Text>
            </View>
            

            <View>
            <Text>Airbone Noise Emissions {data.details.noise}</Text>
            </View>
            
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f9fafd',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    text:{
        fontSize:20,
        color:'#333333',
    
    },
    energyConsumption:{
        alignItems:'center',
        justifyContent:'center'
        
    },

    ratingPart:{
        height:windowHeight/2
    }

})
