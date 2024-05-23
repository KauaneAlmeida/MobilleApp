import React, { useContext, useEffect } from 'react'

//React Navigation
import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack"

//Pages
import SignIn from '../pages/SignIn';
import AuthContext from '../contexts/Auth';


type AuthType = {
  SingIn: any;
}

export type AuthRouteType = StackNavigationProp<AuthType>;

export default function AuthRoutes() {

    const authStack = createStackNavigator();

    const { user } = useContext(AuthContext)



  return (
    <authStack.Navigator>
        <authStack.Screen name='SignIn' component={SignIn} options={{headerShown: false, title: "Acessar"}}/>
    </authStack.Navigator>
  )
}