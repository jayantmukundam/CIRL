import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from "react-native"
import { Rating } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { windowHeight, windowWidth } from "../utils/Dimensions"



export default function LabelScreen({ route,navigation }) {

    const { barCode } = route.params;

    const [data, setData] = useState([]);

    useEffect(() => {
        
        // fetch('http://cirl-api.herokuapp.com/api/product/8901072002478')
            fetch(`http://cirl-api.herokuapp.com/api/product/${barCode}`)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          
      }, []);

      
    return (
        <View>
            


            {/* <View style={styles.heading}>
                <Text style={styles.headingText}>CIRL</Text>
            </View> */}

            <View style={styles.title}>
                <Text style={{fontFamily:'ubuntu-bold',fontSize:17,marginTop:windowHeight/15,color:'green'}}>Brand: {data.brand}</Text>
                <Text style={{fontFamily:'ubuntu-bold',fontSize:17,marginTop:15,color:'green'}}>Model: {data.modelIdentifier}</Text>
                <Text style={{fontFamily:'ubuntu-bold',fontSize:17,marginTop:15,color:'green'}}>Product: {data.productGroup}</Text>
            </View>
        
            

            <View style={styles.overallRating}>
                <Text style={styles.overallText}>Overall</Text>
                <Rating
                type='custom'
                ratingColor='red'
                ratingBackgroundColor='black'
                ratingCount={5}
                imageSize={35}
                defaultRating={5}
                // onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
                readonly={true}
                startingValue={data.overall_rating}
                />
            </View>

            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                }}
            />
            
            <View style={styles.rating}>
                <Text style={styles.materialsText}>Materials</Text>

                <Rating
                type='custom'

                ratingColor='red'
                ratingBackgroundColor='black'
                ratingCount={5}
                imageSize={30}
                defaultRating={5}
                // onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
                readonly={true}
                startingValue={data.materials}
                />

            </View>


            <View style={styles.rating}>
                <Text style={styles.productionText}>Production</Text>
                <Rating
                type='custom'

                ratingColor='red'
                ratingBackgroundColor='black'
                ratingCount={5}
                imageSize={30}
                defaultRating={5}
                // onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
                readonly={true}
                startingValue={data.production}
                />
            </View>


            <View style={styles.rating}>
                <Text style={styles.impactText}>Impact of Use</Text>
                <Rating
                type='custom'

                ratingColor='red'
                ratingBackgroundColor='black'
                ratingCount={5}
                imageSize={30}
                // defaultRating={5}
                // onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
                readonly={true}
                startingValue={data.impact}
                />
            </View>


            <View style={styles.rating}>
                <Text style={styles.recycleText}>Recycle/Disposal</Text>
                <Rating
                type='custom'

                ratingColor='red'
                ratingBackgroundColor='black'
                ratingCount={5}
                imageSize={30}
                defaultRating={5}
                // onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
                readonly={true}
                startingValue={data.recycle}
                />
            </View>

            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                }}
            />
            
            <View style={{margin:20,alignItems:"center"}}>
                <Text style={styles.footerText}>
                    More stars are better.
                    </Text>
                {/* <Text style={styles.footerText}>
                    *Compared to similar products.
                </Text> */}
            </View>

</View>
    )
}

const styles = StyleSheet.create({
    title:{
        // padding:20,
        margin:10,
        justifyContent:'flex-start',
        
    },
    heading:{
        flexDirection:'row',
        margin:windowHeight/100,
        paddingTop:windowHeight/50
    },
    headingText:{
        fontFamily:'ubuntu-bold',
        fontSize:windowHeight/20,
        marginTop:20,
        paddingHorizontal:150,
        color:'green'
    },
    overallText:{
        fontFamily:'ubuntu-bold',
        fontSize:40,
        margin:10,
        color:'black'
    },
    
    materialsText:{
        fontFamily:'ubuntu-bold',
        fontSize:20,
        marginRight:70,
        marginLeft:30
        
    },
    productionText:{
        fontFamily:'ubuntu-bold',
        fontSize:20,
        marginRight:60,
        marginLeft:30
        
    },
    impactText:{
        fontFamily:'ubuntu-bold',
        fontSize:20,
        marginRight:40,
        marginLeft:30

        
    },
    recycleText:{
        fontFamily:'ubuntu-bold',
        fontSize:20,
        marginRight:10,
        marginLeft:30
        
        
    },
    overallRating:{
        flexDirection:'row',
        margin:30,
        alignContent:'flex-end'
        
    },
    rating:{
        flexDirection:'row',
        alignItems:'center',
        margin:20,
        // marginRight:10,
        // paddingHorizontal:30
        
    },
    footerText:{
        fontFamily:'ubuntu-bold',
        fontSize:20,
    }
    
})
