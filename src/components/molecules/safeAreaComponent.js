import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/styles'
import { KeyboardAvoidingComponent } from '../atoms'

const SafeAreaComponent = ({children}) => {
  return (
    <KeyboardAvoidingComponent>
    <SafeAreaView style={commonStyles.flex}>
        {children}
    </SafeAreaView>
    </KeyboardAvoidingComponent>
  )
}

export default SafeAreaComponent

const styles = StyleSheet.create({})