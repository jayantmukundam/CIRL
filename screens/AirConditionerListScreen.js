import React, { useEffect, useState } from 'react';
import { View, Text ,StyleSheet,Button,Image,SafeAreaView,FlatList,TouchableOpacity, useWindowDimensions} from 'react-native'

import { Divider } from 'react-native-elements';
import { Rating } from 'react-native-elements';

import { windowHeight, windowWidth } from "../utils/Dimensions"



export default function AirConditionerListScreen({ route,navigation }) {

    const {product} = route.params;
    const [lists, setList] = useState([]);
    

useEffect(() => {
    fetch('https://cirl-api.herokuapp.com/api/product/prod/AIR%20CONDITIONER')
      .then((response) => response.json())
      .then((json) => setList(json))
      .catch((error) => console.error(error))
      
  }, []);

  


  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => {
                    
        navigation.navigate('ViewLabel', {
            barCode: item.barcodeId,
          });
      }} style={styles.item}>
          <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,

                    
                }}
            />
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column',marginTop:2}}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.model}>{item.modelIdentifier}</Text>
              </View>
              
          <Rating
                type='custom'
                ratingColor='red'
                ratingBackgroundColor='black'
                ratingCount={5}
                imageSize={27}
                defaultRating={5}
                // onFinishRating={ratingCompleted}
                style={{paddingHorizontal:100,marginTop:15}}
                readonly={true}
                startingValue={item.overall_rating}
                />
          
          </View>
      
      
    </TouchableOpacity>
  );


    return (
       <SafeAreaView style={styles.container}>
         <View style={styles.title}>
          <Text style={styles.titleText}>{product.toUpperCase()}</Text>
          </View>
         <FlatList
           data={lists}
           renderItem={({item})=>(
             <Item item={item}/>
            )}
          keyExtractor={(item) => item._id}
        />
    </SafeAreaView>
    
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:1, 
    },
    title:{
      padding:5,
      marginTop:40,
      alignItems:'center',
      //backgroundColor:'lightgreen',
    },
    titleText:{
      fontFamily:'ubuntu',
      fontSize:25,
      
    },
    
    item: {
     margin:20,  
    },
    brand: {
      marginTop:20,
      fontSize: 20,
      fontFamily:'ubuntu',
      //backgroundColor:'red' 
    },
    model:{
      fontSize:18,
      width:windowWidth/3,
      //backgroundColor:'pink'
    }
  });