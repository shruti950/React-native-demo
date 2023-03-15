/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme, View, } from 'react-native';
import { client } from './src/apolloClient';
import Dashboard from './src/dashboard';
import Login from './src/login';
import Name from './src/name';
import AppNav from "./src/navigation"
import { Colors } from './src/utils/colors';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client} >
    {/* <Login/>
    <Name/> */}
    {/* <Dashboard/> */}
    <SafeAreaView style={{flex:1,backgroundColor:Colors.WHITE}}>
    <AppNav/>

    </SafeAreaView>

    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
