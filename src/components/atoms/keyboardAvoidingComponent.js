import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/styles'

const KeyboardAvoidingComponent = ({ children }) => {
  return (
    <KeyboardAvoidingView style={commonStyles.flex} behavior={Platform.OS === "android" ? "padding" : ""} enabled>
      {children}
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingComponent

const styles = StyleSheet.create({})