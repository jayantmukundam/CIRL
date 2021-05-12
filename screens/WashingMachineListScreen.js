import React, { useEffect, useState } from 'react';
import { View, Text ,StyleSheet,Button,Image,SafeAreaView,FlatList,TouchableOpacity} from 'react-native'

import { Divider } from 'react-native-elements';
import { Rating } from 'react-native-elements';

import { windowHeight, windowWidth } from "../utils/Dimensions"








export default function WashingMachineListScreen({ route,navigation }) {

    const [lists, setList] = useState([]);
    

useEffect(() => {
    fetch('https://cirl-api.herokuapp.com/api/product/prod/WASHING%20MACHINE')
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
          <View style={{flexDirection:'row'}}>
          <Text style={styles.title}>{item.brand}</Text>
          <Rating
                type='custom'

                ratingColor='black'

                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={30}
                defaultRating={5}
                // onFinishRating={ratingCompleted}
                 style={{ paddingVertical: 30, alignItems:'center'}}
                readonly={true}
                startingValue={item.overall_rating}
                />
          </View>
      
      
    </TouchableOpacity>
  );




    return (
       <SafeAreaView style={styles.container}>
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
      marginTop: 10,
    },
    item: {
     margin:20,
      
    },
    title: {
      fontSize: 32,
      fontFamily:'ubuntu',
      margin:20
    },
  });