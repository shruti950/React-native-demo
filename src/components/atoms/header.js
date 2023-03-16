import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Vectors } from '../../assets/vectors'
import { Matrics } from '../../utils/matrics'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../utils/colors'

const Header = () => {
    const navigation = useNavigation()
    return (
        <Pressable style={{ paddingHorizontal: Matrics.hs15, width: "10%" }} hitSlop={10} onPress={() => navigation.goBack()}>
            <Image source={Vectors.back} style={{ tintColor: Colors.WHITE }} />
        </Pressable>
    )
}

export default Header

const styles = StyleSheet.create({})