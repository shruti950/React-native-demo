import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../dashboard'
import Login from '../login'
import { Vectors } from '../assets/vectors'
import { getSansUITextFont, width } from '../utils'
import { Matrics } from '../utils/matrics'
import { Colors } from '../utils/colors'

const Tab = createBottomTabNavigator()

const bottomTab = [
    {
        name:"Home",
        screen:"Home",
        image:Vectors.home,
        component:<Dashboard/>,
        deActiveImage:Vectors.deactiveHome
    },
    {
        name:"Search",
        screen:"Login",
        image:Vectors.search,
        deActiveImage:Vectors.search,
        component:<Dashboard/>,
    },
    {
        name:"Orders",
        screen:"Logins",
        image:Vectors.fileText,
        deActiveImage:Vectors.fileText,
        component:<Dashboard/>,
    },
    {
        name:"Account",
        screen:"Loginsa",
        image:Vectors.useraccount,
        deActiveImage:Vectors.useraccount,
        component:<Dashboard/>,
    },
]


const MyTabBar = (props) => {
    return (
        <View style={styles.mainView}>
            {bottomTab.map((item,i)=>{
                let style = i !== 0 ? {tintColor:props?.state?.index === i  ? Colors.RED:Colors.GRAY}:{}
                return(
                   <Pressable style={styles.tabView} onPress={()=>props?.navigation?.navigate(item?.screen)}>
                    <Image source={props?.state?.index === i ?  item.image:item?.deActiveImage} style={[styles.imageStyle,style]} />
                    <Text style={[styles.textView,{color:props?.state?.index === i ? Colors.RED:Colors.GRAY}]}>{item?.name}</Text>
                   </Pressable>
                )
            })}
        </View>
      );
}

const BottomTab = () => {
  return (
   <Tab.Navigator tabBar={props => <MyTabBar {...props} />}   screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Dashboard}/>
    <Tab.Screen name="Login" component={Login}/>
    <Tab.Screen name="Logins" component={Login}/>
    <Tab.Screen name="Loginsa" component={Login}/>
   </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
imageStyle:{width:Matrics.ms24,height:Matrics.ms24},
textView:{fontFamily:getSansUITextFont("Medium"),fontSize:Matrics.ms14,paddingTop:Matrics.vs5,textAlign:"center"},
tabView:{width:width/4,alignItems:"center"},
mainView:{flexDirection:"row",paddingTop:Matrics.vs15}
})