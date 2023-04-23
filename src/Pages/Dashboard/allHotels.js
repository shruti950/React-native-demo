import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaComponent } from '../../components/molecules'
import Header from './components/header'
import { commonStyles } from '../../utils/styles'
import { Images } from '../../assets/Images'
import { Matrics } from '../../utils/matrics'
import { Colors } from '../../utils/colors'
import { Vectors } from '../../assets/vectors'
import { useNavigation } from '@react-navigation/native'

const AllHotels = () => {
    const navigation = useNavigation()
    const hotelsLeft = [

        {
            name: "Ocean Bistro",
            location: "Summer house",
            image: Images.hotel1,
        },

        {
            name: "The Flavorful Table",
            location: "Summer house",
            image: Images.hotel3,
        },

        {
            name: "North Beach Restaurant",
            location: "Summer house",
            image: Images.hotel5,
        },

        {
            name: "Chewy Balls",
            location: "Summer house",
            image: Images.hotel7,
        },

    ]
    const hotelsRight = [

        {
            name: "Ocean Bistro",
            location: "Summer house",
            image: Images.hotel2,
        },

        {
            name: "Garden Dining Room",
            location: "Summer house",
            image: Images.hotel4,
        },

        {
            name: "Starbelly",
            location: "Summer house",
            image: Images.hotel6,
        },

        {
            name: "The Table at Season To Taste",
            location: "Summer house",
            image: Images.hotel8,
        },
    ]

    const renderImageView = (item) => {
        return (
            <Pressable style={{ flex: 0.5, marginTop: Matrics.vs10, }} onPress={() => navigation.navigate("HotelDetails")}>
                <View style={{ position: "relative" }}>

                    <Image source={item?.image} style={{ width: "100%", borderRadius: Matrics.ms8 }} />
                    <View style={{ backgroundColor: "#4F4F4FCC", width: "87%", paddingVertical: Matrics.vs10, borderRadius: Matrics.ms8, marginHorizontal: Matrics.hs5, position: "absolute", bottom: 10, left: 5, paddingHorizontal: Matrics.hs10 }}>
                        <View style={[commonStyles.rowCenter]}>
                            <Image source={Vectors.clock} style={{ tintColor: Colors.WHITE }} />
                            <Text style={[commonStyles.subText, { paddingHorizontal: Matrics.hs5, color: Colors.WHITE }]}>32 min</Text>
                        </View>
                        <View style={[commonStyles.rSpaceCent, { paddingTop: Matrics.vs7 }]}>
                            <View style={[commonStyles.rowCenter]}>
                                <Image source={Vectors.bike} style={{ tintColor: Colors.WHITE }} />
                                <Text style={[commonStyles.subText, { paddingHorizontal: Matrics.hs5, color: Colors.WHITE }]}>Free </Text>
                            </View>
                            <View>
                                <View style={[commonStyles.rowCenter, { backgroundColor: Colors.RED, paddingHorizontal: Matrics.hs7, paddingVertical: Matrics.vs2, borderRadius: Matrics.ms4 }]}>
                                    <Image source={Vectors.star} />
                                    <Text style={[commonStyles.med14, { color: Colors.WHITE, paddingLeft: Matrics.hs5 }]}>4.2</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: Matrics.vs10 }}>
                    <Text style={[commonStyles.med16]}>{item?.name}</Text>
                    <Text style={[commonStyles.med14, { color: Colors.LIGHTGRAY, paddingTop: Matrics.vs5 }]}>{item?.location}</Text>
                </View>
            </Pressable>
        )
    }

    return (
        <SafeAreaComponent>
            <Header back={true} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[commonStyles.flex, commonStyles.row, { marginHorizontal: Matrics.hs15 }]}>
                    <View style={{ flex: 0.5, paddingRight: Matrics.hs7 }}>
                        {
                            hotelsLeft?.map((item, i) => {
                                return renderImageView(item)
                            })
                        }

                    </View>

                    <View style={{ flex: 0.5, paddingLeft: Matrics.hs7 }}>
                        {
                            hotelsRight?.map((item, i) => {
                                return renderImageView(item)
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaComponent>
    )
}

export default AllHotels

const styles = StyleSheet.create({})