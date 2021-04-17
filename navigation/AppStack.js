import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import BarCodeScreen from '../screens/BarCodeScreen'
import LabelScreen from '../screens/LabelScreen'
import EditProfileScreen from '../screens/EditProfileScreen'


const Stack = createStackNavigator()
 const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator()

const HomeStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerShown: false,
          }}
      />

    <Stack.Screen
        name="BarCode"
        component={BarCodeScreen}
        options={{
            headerShown: false,
          }}
      />

    <Stack.Screen
        name="ViewLabel"
        component={LabelScreen}
        options={{
            headerShown: false,
          }}
      />
      
      
    </Stack.Navigator>
  );

  const ProfileStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
       
        
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTitle: 'Edit Profile',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
       
        
      />
      
    </Stack.Navigator>
  );





export default function AppStack() {

    // return (
    //     <Stack.Navigator>
    //         <Stack.Screen name = "Home" component={HomeScreen}/>
    //     </Stack.Navigator>
    // )

    
    
        return (

          <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor="#fff"
      
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={20} color={color} />
          ),
        }}
      />
     
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>

            

            // <Tab.Navigator
            //   tabBarOptions={{
            //     activeTintColor: '#2e64e5',
            //   }}>
            //   <Tab.Screen
            //     name="Home"
            //     component={HomeStack}
            //     options={({route}) => ({
            //       tabBarLabel: 'Home',
                  
            //       tabBarIcon: ({color, size}) => (
            //         <AntDesign name="home" size={size} color={color} />
            //       ),
            //     })}
            //   />
             
            //   <Tab.Screen
            //     name="Profile"
            //     component={ProfileStack}
            //     options={{
            //        tabBarLabel: 'Profile',
            //       tabBarIcon: ({color, size}) => (
            //         <Ionicons name="person-outline" color={color} size={size} />
            //       ),
            //     }}
            //   />
            // </Tab.Navigator>
          );
    
}
