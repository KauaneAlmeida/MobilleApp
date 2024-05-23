import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppRoutes from './app.routes';
import Home from '../pages/home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../pages/profile';

export default function TabNavigator() {

    const tab = createBottomTabNavigator()

    return (
        <tab.Navigator screenOptions={{
            headerTintColor: "#000",
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: 'grey',
            headerShown: true,
            tabBarStyle: {
              backgroundColor: '#f2f2f2',
              borderTopWidth: 0,
              shadowOffset: {
                width: 5,
                height: 3,
              },
              shadowColor: '#000',
              shadowOpacity: 0.3,
              elevation: 5,
            },
          }}>
            <tab.Screen name='Home' component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" color={color} size={size} />
                ),
            }}/>
            <tab.Screen name='Perfil' component={Profile} options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-circle" color={color} size={size} />
                ),
            }}/>
        </tab.Navigator>
    )
}