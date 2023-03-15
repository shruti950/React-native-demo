import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Dashboard from '../dashboard'
import BottomTab from './bottomTab'

const Stack = createNativeStackNavigator()

const Index = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName='MainTab' screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'transparent' } }}>
        <Stack.Screen name="MainTab" component={BottomTab}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Index

const styles = StyleSheet.create({})