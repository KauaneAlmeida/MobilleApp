import React, { useContext, useEffect } from 'react'
import { TouchableOpacity, Text } from 'react-native';

//React Navigation
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import AuthContext from '../contexts/Auth';
import { Button } from 'react-native';
import TabNavigator from './tabNavigator';



export default function AppRoutes() {

  const stack = createStackNavigator();

  return (
    <stack.Navigator screenOptions={{
      headerShown: false,
    }}>
    <stack.Screen name="TabNavigator" component={TabNavigator}/> 
    </stack.Navigator>

)

}
