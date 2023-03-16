import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../login'
import { Vectors } from '../assets/vectors'
import { getSansUITextFont, width } from '../utils'
import { Matrics } from '../utils/matrics'
import { Colors } from '../utils/colors'
import Dashboard from '../Pages/Dashboard/dashboard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllHotels from '../Pages/Dashboard/allHotels'
import HotelDetails from '../Pages/Dashboard/hotelDetails'

const Tab = createBottomTabNavigator()

const bottomTab = [
    {
        name: "Home",
        screen: "Home",
        image: Vectors.home,
        component: <Dashboard />,
        deActiveImage: Vectors.deactiveHome
    },
    {
        name: "Search",
        screen: "Login",
        image: Vectors.search,
        deActiveImage: Vectors.search,
        component: <Dashboard />,
    },
    {
        name: "Orders",
        screen: "Logins",
        image: Vectors.fileText,
        deActiveImage: Vectors.fileText,
        component: <Dashboard />,
    },
    {
        name: "Account",
        screen: "Loginsa",
        image: Vectors.useraccount,
        deActiveImage: Vectors.useraccount,
        component: <Dashboard />,
    },
]


const HomeStack = () => {
    const Stack = createNativeStackNavigator()
    return <Stack.Navigator headerMode="none" initialRouteName='HotelDetails' screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'transparent' } }}>
        {/* <Stack.Screen name="MainTab" component={BottomTab}/> */}
        <Stack.Screen name='HotelDetails' component={HotelDetails} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='AllHotels' component={AllHotels} />
    </Stack.Navigator>
}

const MyTabBar = (props) => {
    return (
        <View style={styles.mainView}>
            {bottomTab.map((item, i) => {
                let style = i !== 0 ? { tintColor: props?.state?.index === i ? Colors.RED : Colors.GRAY } : {}
                return (
                    <Pressable style={styles.tabView} onPress={() => props?.navigation?.navigate(item?.screen)}>
                        <Image source={props?.state?.index === i ? item.image : item?.deActiveImage} style={[styles.imageStyle, style]} />
                        <Text style={[styles.textView, { color: props?.state?.index === i ? Colors.RED : Colors.GRAY }]}>{item?.name}</Text>
                    </Pressable>
                )
            })}
        </View>
    );
}

const BottomTab = () => {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Logins" component={Login} />
            <Tab.Screen name="Loginsa" component={Login} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    imageStyle: { width: Matrics.ms24, height: Matrics.ms24 },
    textView: { fontFamily: getSansUITextFont("Medium"), fontSize: Matrics.ms14, paddingTop: Matrics.vs5, textAlign: "center" },
    tabView: { width: width / 4, alignItems: "center" },
    mainView: { flexDirection: "row", paddingVertical: Matrics.vs20, bottom: 10 },

})