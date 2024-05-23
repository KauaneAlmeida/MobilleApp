 import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-animatable'
import AppRoutes from './app.routes'
import AuthRoutes from "./auth.routes"
import AuthContext from '../contexts/Auth'

export default function Routes() {


  const {signed} = useContext(AuthContext) 
  console.log(signed)

  return (
    <View style={styles.conteiner}>
      {signed ? <AppRoutes/> : <AuthRoutes/>}
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  }

})