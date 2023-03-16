import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Images } from '../../assets/Images'
import { Vectors } from '../../assets/vectors'
import { SafeAreaComponent } from '../../components/molecules'
import { getSansUITextFont, width } from '../../utils'
import { Colors } from '../../utils/colors'
import { Matrics } from '../../utils/matrics'
import { commonStyles } from '../../utils/styles'
import Header from './components/header'

const Dashboard = () => {
    const navigation = useNavigation()
    const hotels = [
        {
            name: "67 Athi hotel",
            adress: "Summer house, Athi river",
            image: Images.food1,
        },
        {
            name: "The white resort",
            adress: "Sumbulah road",
            image: Images.food1,
        }
    ]

    const foods = [
        {
            name: "Burgers",
            image: Images.burgers,
        },
        {
            name: "Pizza",
            image: Images.pizza,
        },
        {
            name: "Greens",
            image: Images.greens,
        },
        {
            name: "Burgers",
            image: Images.burgers,
        },
    ]

    const popularHotel = [
        {
            name: "Silver Inn",
            name1: "Thai food",
            name2: "African food",
            name3: "Caribbean food",
            image: Images.thaiFood
        },
        {
            name: "Hillside Retreat",
            name1: "Mexican food",
            name2: "American food",
            name3: "Italian food",
            image: Images.mexicanFood
        },
        {
            name: "Luxe Residences",
            name1: "Vegeterian",
            name2: "Indian food",
            name3: "French food",
            image: Images.vegeterian
        },
    ]
    return (
        <SafeAreaComponent>
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.cardView}>
                    <Text style={styles.cardHeadText}>You’ve earned your special offer!</Text>
                    <Text style={[commonStyles.med14,styles.midText]}>For ordering more than 4 times last month, you earn 40% off your next meal</Text>
                    <View style={styles.claimView}>
                        <Text style={styles.claimText}>Claim now</Text>
                    </View>
                </View>
                <View style={{ margin: Matrics.ms15 }}>
                    <View style={commonStyles.rowSpaceBet}>
                        <Text style={styles.headText}>Featured hotels</Text>
                        <Pressable onPress={()=>navigation.navigate("AllHotels")}>
                        <Text style={[commonStyles.medRed16()]}>See all</Text>
                        </Pressable>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            hotels.map((item, i) => {
                                return (
                                    <View style={{ marginVertical: Matrics.vs15, paddingRight: i === hotels?.length - 1 ? 0 : Matrics.hs20 }}>
                                        <View>
                                            <Image source={item?.image} style={{ width: width / 1.5, height: Matrics.vs160 }} />
                                        </View>
                                        <View style={{ marginTop: Matrics.vs10 }}>
                                            <Text style={{ fontSize: Matrics.ms18, color: Colors.BLACK, fontFamily: getSansUITextFont("Medium") }}>{item?.name}</Text>
                                            <Text style={{ fontSize: Matrics.ms14, color: Colors.LIGHTGRAY, fontFamily: getSansUITextFont("Light"), lineHeight: Matrics.ms22 }}>{item?.adress}</Text>

                                        </View>
                                        <View style={[commonStyles.rowCenter]}>
                                            <View style={[commonStyles.rowCenter,{  backgroundColor: Colors.RED, paddingHorizontal: Matrics.hs7, paddingVertical: Matrics.vs2, borderRadius: Matrics.ms4 }]}>
                                                <Image source={Vectors.star} />
                                                <Text style={[commonStyles.med14,{  color: Colors.WHITE, paddingLeft: Matrics.hs5 }]}>4.2</Text>
                                            </View>
                                            <View style={[commonStyles.rowCenter,{  paddingLeft: Matrics.hs5 }]}>
                                                <Text style={{ fontSize: Matrics.ms25, color: Colors.GRAY }}>•</Text>
                                                <Text style={[commonStyles.med14,{ color: Colors.GRAY }]}>32 min</Text>

                                            </View>
                                            <View style={[commonStyles.rowCenter,{  paddingLeft: Matrics.hs5 }]}>
                                                <Text style={{ fontSize: Matrics.ms25, color: Colors.GRAY }}>•</Text>
                                                <Text style={[commonStyles.med14,{ color: Colors.GRAY }]}>Free delivery</Text>

                                            </View>
                                        </View>
                                    </View>

                                )
                            })
                        }

                    </ScrollView>
                </View>
                <View style={{ marginHorizontal: Matrics.hs15 }}>
                    <View style={commonStyles.rowSpaceBet}>
                        <Text style={styles.headText}>Foods</Text>
                        <Text style={commonStyles.medRed16()}>See all</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: "row", marginTop: Matrics.vs15 }}>

                            {foods?.map((food, i) => {
                                return (
                                    <View style={{ paddingLeft: i !== 0 ? Matrics.hs15 : 0 }}>
                                        <Image source={food.image} style={{ height: Matrics.vs95, width: Matrics.hs95 }} />
                                        <Text style={{ fontSize: Matrics.ms16, color: Colors.GRAY, fontFamily: getSansUITextFont("Medium"), paddingTop: Matrics.vs10 }}>{food.name}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                <View style={{ margin: Matrics.ms15, marginTop: Matrics.ms20 }}>
                    <View style={commonStyles.rowSpaceBet}>
                        <Text style={styles.headText}>Popular hotels</Text>
                        <Text style={[commonStyles.medRed16()]}>See all</Text>
                    </View>
                    {
                        popularHotel?.map(item => {
                            return (
                                <View style={{ marginTop: Matrics.vs25 }}>
                                    <View>
                                        <Image source={item?.image} style={{ width: "100%", borderRadius: Matrics.ms8, height: Matrics.vs195 }} />
                                    </View>
                                    <View style={{ marginVertical: Matrics.vs10 }}>
                                        <Text style={{ fontSize: Matrics.ms18, color: Colors.BLACK, fontFamily: getSansUITextFont("Medium") }}>{item?.name}</Text>
                                        <View style={{ flexDirection: "row", paddingTop: Matrics.vs7 }}>
                                            <Text style={[commonStyles.medLightGray14()]}>{item?.name1}</Text>
                                            <Text style={[commonStyles.medLightGray14(),{  paddingLeft: Matrics.hs10 }]}>• {item?.name2}</Text>
                                            <Text style={[commonStyles.medLightGray14(),{  paddingLeft: Matrics.hs10 }]}>• {item?.name3}</Text>
                                        </View>
                                    </View>
                                    <View style={[commonStyles.rowCenter]}>
                                        <View style={[commonStyles.rowCenter,{ paddingHorizontal: Matrics.hs7, borderRadius: Matrics.ms4 }]}>
                                            <Text style={[commonStyles.subText,{ paddingRight: Matrics.hs5 }]}>4.2</Text>
                                            <Image source={Vectors.star} style={{ width: Matrics.hs16, height: Matrics.hs16 }} />
                                        </View>
                                        <View style={[commonStyles.rowCenter]}>
                                            <Text style={{ fontSize: Matrics.ms20, color: Colors.GRAY, paddingRight: Matrics.hs5 }}> •</Text>
                                            <Image source={Vectors.clock} />
                                            <Text style={[commonStyles.subText,{ paddingHorizontal: Matrics.hs5 }]}>32 min</Text>

                                        </View>
                                        <View style={[commonStyles.rowCenter,{  paddingLeft: Matrics.hs5 }]}>
                                            <Text style={{ fontSize: Matrics.ms20, color: Colors.GRAY, paddingRight: Matrics.hs5 }}>•</Text>
                                            <Image source={Vectors.bike} />

                                            <Text style={[commonStyles.subText,{ paddingHorizontal: Matrics.hs5 }]}>Free delivery</Text>

                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaComponent>

    )
}

export default Dashboard


const styles = StyleSheet.create({
headText:{ fontSize: Matrics.ms20, color: Colors.BLACK, fontFamily: getSansUITextFont("Bold") },
subText:{ fontSize: Matrics.ms14, color: Colors.GRAY, fontFamily: getSansUITextFont("Medium")},
cardView:{ backgroundColor: Colors.LIGHTPINKBACKGROUND, height: Matrics.vs195, marginHorizontal: Matrics.hs15, borderRadius: Matrics.ms12, padding: Matrics.ms20, paddingRight: Matrics.hs40, marginBottom: Matrics.vs10 },
cardHeadText:{ fontFamily: getSansUITextFont("Bold"), fontSize: Matrics.ms24, color: Colors.BLACK },
midText:{ color: Colors.MEDIUMGRAY, lineHeight: Matrics.ms20, paddingVertical: Matrics.vs10 },
claimView:{ borderBottomColor: Colors.RED, borderBottomWidth: Matrics.ms2, width: "27%", paddingVertical: Matrics.vs5 },
claimText:{ fontFamily: getSansUITextFont("Bold"), fontSize: Matrics.ms16, color: Colors.BLACK }
})
