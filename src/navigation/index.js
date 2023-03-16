import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './bottomTab'
import Dashboard from '../Pages/Dashboard/dashboard'
import AllHotels from '../Pages/Dashboard/allHotels'

const Stack = createNativeStackNavigator()

const Index = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName='MainTab' screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'transparent' } }}>
        <Stack.Screen name="MainTab" component={BottomTab}/>
        {/* <Stack.Screen name='Dashboard' component={Dashboard}/>
        <Stack.Screen name='AllHotels' component={AllHotels}/> */}
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Index

const styles = StyleSheet.create({})