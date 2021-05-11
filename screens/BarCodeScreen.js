import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Button,Image } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import { windowHeight, windowWidth } from "../utils/Dimensions"

export default function BarCodeScreen({ route,navigation }) {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)

    const { otherParam } = route.params;

    useEffect(() => {
        ;(async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === "granted")
        })()
    }, [])

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`)
        console.log(data)
        // navigateToLabel()
        navigation.navigate('ViewLabel', {
          barCode: data,
        });
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    

    return (
        <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>

    
            <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}>
        <Text style={styles.description}>Scan your Bar Code</Text>


        <View style={styles.qr}>

        </View>
        
        

        
        
      </BarCodeScanner>
            
            {/* {scanned && navigation.navigate("ViewLabel")} */}
            {/* {scanned && navigateToLabel()} */}
            

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      qr: {
        // marginTop: '20%',
        marginBottom: '20%',
        width: windowWidth*0.7,
        height: windowHeight/6,
        // backgroundColor:'white',
        borderColor: 'white',
        borderWidth:2,
        
      },
      description: {
        fontSize: windowWidth * 0.09,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
      },
      cancel: {
        fontSize: windowWidth * 0.05,
        textAlign: 'center',
        width: '70%',
        color: 'white',
      },
})
