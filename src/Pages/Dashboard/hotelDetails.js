import { Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingComponent } from '../../components/atoms'
import { Images } from '../../assets/Images'
import { Matrics } from '../../utils/matrics'
import { commonStyles } from '../../utils/styles'
import { Colors } from '../../utils/colors'
import { getSansUITextFont, height } from '../../utils'
import { Vectors } from '../../assets/vectors'
import Header from '../../components/atoms/header'
import FoodsComponent from './components/foodsComponent'
import { foods } from './dashboard'

const HotelDetails = () => {
    const [active, setActive] = useState(0)
    const foodCategory = [
        {
            name: "Appetizer",
            image: Vectors.appetizer
        },
        {
            name: "Drinks",
            image: Vectors.drinks
        },
        {
            name: "Sea food",
            image: Vectors.seaFood
        },
    ]

    const foodCategoryWise = [
        {
            name: "Cookie sandwich",
            description: "Shortbread, chocolate turtle cookies, and red velvet.",
            image: Images.pizza
        },
        {
            name: "Combo burger",
            description: "Shortbread, chocolate turtle cookies, and red velvet.",
            image: Images.burgers
        },
        {
            name: "Combo sandwich",
            description: "Shortbread, chocolate turtle cookies, and red velvet.",
            image: Images.greens
        },
    ]
    return (
        <>
            <KeyboardAvoidingComponent>
                <StatusBar barStyle={"light-content"} translucent={true} backgroundColor='transparent' />
                <ScrollView contentContainerStyle={{ flexGrow: 1, }} directionalLockEnabled={true} >
                    <ImageBackground source={Images.backgroundFood} style={{ width: "100%", height: height / 3.4 }}>
                        <View style={{ height: Matrics.vs70, justifyContent: "flex-end", paddingHorizontal: Matrics.hs10 }}>
                            <Header />
                        </View>
                    </ImageBackground>
                    {/* <Image source={Images.backgroundFood} style={{ width: "100%" }} resizeMode={"cover"} /> */}
                    <View style={{ margin: Matrics.hs15 }}>
                        <View>
                            <Text style={{ fontSize: Matrics.ms24, color: Colors.BLACK, fontFamily: getSansUITextFont("Medium") }}>{"Garden Dining Room"}</Text>
                            <View style={{ flexDirection: "row", paddingTop: Matrics.vs7 }}>
                                <Text style={[commonStyles.medLightGray14(), { fontSize: Matrics.ms16 }]}>{"Kenyan"}</Text>
                                <Text style={[commonStyles.medLightGray14(), { paddingLeft: Matrics.hs10, fontSize: Matrics.ms16 }]}>•  {"African"}</Text>
                                <Text style={[commonStyles.medLightGray14(), { paddingLeft: Matrics.hs10, fontSize: Matrics.ms16 }]}>•  {"Deshi food"}</Text>
                            </View>
                            <View style={[commonStyles.rowCenter, { paddingVertical: Matrics.vs20 }]}>
                                <View style={[commonStyles.rowCenter, { backgroundColor: Colors.RED, paddingHorizontal: Matrics.hs7, paddingVertical: Matrics.vs2, borderRadius: Matrics.ms4 }]}>
                                    <Image source={Vectors.star} />
                                    <Text style={[commonStyles.med14, { color: Colors.WHITE, paddingLeft: Matrics.hs5 }]}>4.2</Text>
                                </View>
                                <View >
                                    <Text style={[commonStyles.med14, { color: Colors.GRAY, paddingLeft: Matrics.hs10 }]}>127+ ratings</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={[commonStyles.rowCenter, { marginTop: Matrics.vs5 }]}>
                                <View style={[commonStyles.rSpaceCent, { flex: 0.3 }]}>
                                    <View>
                                        <Image source={Vectors.bikeBack} style={{ width: Matrics.ms32, height: Matrics.ms32 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: Matrics.ms18, fontFamily: getSansUITextFont("Bold") }}>Free</Text>
                                        <Text style={[commonStyles.med14, { color: Colors.LIGHTGRAY }]}>delivery</Text>
                                    </View>
                                </View>
                                <View style={[commonStyles.rSpaceCent, { flex: 0.3, paddingLeft: Matrics.hs15 }]}>
                                    <View>
                                        <Image source={Vectors.clockBack} style={{ width: Matrics.ms32, height: Matrics.ms32 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: Matrics.ms18, fontFamily: getSansUITextFont("Bold") }}>12</Text>
                                        <Text style={[commonStyles.med14, { color: Colors.LIGHTGRAY }]}>Minutes</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderColor: Colors.RED, borderWidth: Matrics.ms1, paddingHorizontal: Matrics.hs10, paddingVertical: Matrics.vs12, width: Matrics.hs120, alignItems: "center", marginTop: Matrics.vs30, borderRadius: Matrics.ms4 }}>
                                <Text style={[commonStyles.med14, { color: Colors.RED }]}>TAKE AWAY</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: Matrics.vs30 }}>
                            <FoodsComponent title={"Featured foods"} foods={foods} width={Matrics.hs135} height={Matrics.vs150} />

                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {foodCategory?.map((item, i) => {
                                    let style = { tintColor: active === i ? Colors.WHITE : Colors.LIGHTGRAY }
                                    return (
                                        <Pressable style={[commonStyles.rowCenter, { justifyContent: "center", paddingHorizontal: Matrics.hs15, paddingVertical: Matrics.vs8, backgroundColor: active === i ? Colors.RED : Colors.LIGHTPINK, borderRadius: Matrics.ms40, marginRight: Matrics.hs15 }]} onPress={() => setActive(i)}>
                                            <Image source={item?.image} style={[style, { height: Matrics.vs20, width: Matrics.hs25 }]} resizeMode={"contain"} />
                                            <Text style={[commonStyles.med16, { color: active === i ? Colors.WHITE : Colors.LIGHTGRAY, paddingLeft: Matrics.hs7 }]}>{item?.name}</Text>
                                        </Pressable>
                                    )
                                })}

                            </ScrollView>
                            <View style={{ marginTop: Matrics.vs10 }}>
                                <View style={{ marginVertical: Matrics.vs15 }}>
                                    <Text style={[commonStyles.med16]}>Most Popular</Text>
                                </View>
                                {foodCategoryWise?.map((item, i) => {
                                    return (
                                        active === i ? <View style={[commonStyles.row, { marginBottom: Matrics.vs15, borderBottomColor: Colors.LIGHTERGRAY, borderBottomWidth: 1, paddingBottom: Matrics.vs15, flex: 1 }]}>
                                            <View style={{ flex: 0.4 }}>
                                                <Image source={item.image} style={{ width: Matrics.ms120, height: Matrics.ms120 }} />
                                            </View>
                                            <View style={{ flex: 0.65 }}>
                                                <View style={{ marginVertical: Matrics.vs10 }}>
                                                    <Text style={[commonStyles.med16]}>{item?.name}</Text>
                                                    <Text style={[commonStyles.medLightGray14(), { lineHeight: Matrics.ms20, paddingTop: Matrics.vs5 }]} numberOfLines={2}>{item?.description}</Text>
                                                </View>
                                                <View style={[commonStyles.rSpaceCent]}>
                                                    <Text style={[commonStyles.medLightGray14()]}>Chinese</Text>
                                                    <Text style={{ fontFamily: getSansUITextFont("Bold"), fontSize: Matrics.ms14, color: Colors.RED }}>Kes 500</Text>
                                                </View>
                                            </View>
                                        </View> : null
                                    )
                                })}
                            </View>
                        </View>
                    </View>

                </ScrollView>
                {/* <View style={styles.rectStackRow}>
                    <View style={styles.rectStack}>
                        <View style={styles.rect}></View>
                        <Image
                            source={Images.pizza}
                            resizeMode="contain"
                            style={styles.image}
                        ></Image>
                    </View>
                    <View style={styles.cookieSandwichColumn}>
                        <Text style={styles.cookieSandwich}>Cookie sandwich</Text>
                        <Text style={styles.loremIpsum}>
                            Shortbread, chocolate turtle cookies, and red velvet.
                        </Text>
                        <View style={styles.chineseRow}>
                            <Text style={styles.chinese}>Chinese</Text>
                            <Text style={styles.kes500}>Kes 500</Text>
                        </View>
                    </View>
                </View> */}
            </KeyboardAvoidingComponent>
        </>
    )
}

export default HotelDetails

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rect: {
        top: 0,
        left: 10,
        width: 105,
        height: 116,
        position: "absolute",
        backgroundColor: "#E6E6E6"
    },
    image: {
        top: 22,
        left: 0,
        width: 119,
        height: 119,
        position: "absolute"
    },
    rectStack: {
        width: 119,
        height: 141
    },
    cookieSandwich: {
        fontFamily: getSansUITextFont("Medium"),
        color: "#121212",
        height: 34,
        width: 182,
        fontSize: 16
    },
    loremIpsum: {
        fontFamily: getSansUITextFont("Medium"),
        color: "rgba(134,134,134,1)",
        height: 28,
        width: 182
    },
    chinese: {
        fontFamily: getSansUITextFont("Medium"),
        color: "rgba(134,134,134,1)",
        height: 21,
        width: 73
    },
    kes500: {
        fontFamily: getSansUITextFont("Bold"),
        color: "rgba(212,35,35,1)",
        height: 21,
        width: 56,
        marginLeft: 57
    },
    chineseRow: {
        height: 21,
        flexDirection: "row",
        marginTop: 16
    },
    cookieSandwichColumn: {
        width: 186,
        marginLeft: 16,
        marginTop: 32,
        marginBottom: 10
    },
    rectStackRow: {
        height: 141,
        flexDirection: "row",
        marginTop: 87,
        marginLeft: 18,
        marginRight: 36
    }
})