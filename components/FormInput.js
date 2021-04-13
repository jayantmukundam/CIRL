import React from 'react'
import { View, Text,TextInput,StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {windowHeight, windowWidth} from '../utils/Dimensions';


export default function FormInput({labelValue,placeHolderText,iconType,...rest}) {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
            <Entypo name={iconType} size={22} color="black" />

            </View>
            <TextInput
            style={styles.input}
            value={labelValue}
            
            placeholder={placeHolderText}
            {...rest}
            />

          
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: '100%',
      height: windowHeight / 15,
      borderColor: '#ccc',
      borderRadius: 3,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      fontFamily:'ubuntu'
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      fontFamily: 'ubuntu',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: windowWidth / 1.5,
    height: windowHeight / 15,
      
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  });
