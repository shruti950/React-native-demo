import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../../utils/styles'
import { Matrics } from '../../../utils/matrics'
import { Colors } from '../../../utils/colors'
import { getSansUITextFont } from '../../../utils'

const FoodsComponent = ({ foods, title, width, height }) => {
    return (
        <View style={{}}>
            <View style={commonStyles.rowSpaceBet}>
                <Text style={commonStyles.headText}>{title}</Text>
                <Text style={commonStyles.medRed16()}>See all</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", marginTop: Matrics.vs15 }}>

                    {foods?.map((food, i) => {
                        return (
                            <View style={{ paddingLeft: i !== 0 ? Matrics.hs15 : 0 }}>
                                <Image source={food?.image} style={{ height: height, width: width, borderRadius: Matrics.ms10 }} />
                                <Text style={{ fontSize: Matrics.ms16, color: Colors.GRAY, fontFamily: getSansUITextFont("Medium"), paddingTop: Matrics.vs10 }}>{food?.name}</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default FoodsComponent

const styles = StyleSheet.create({})