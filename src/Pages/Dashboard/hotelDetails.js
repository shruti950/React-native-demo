import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingComponent } from '../../components/atoms'
import { Images } from '../../assets/Images'
import { Matrics } from '../../utils/matrics'
import { commonStyles } from '../../utils/styles'
import { Colors } from '../../utils/colors'
import { getSansUITextFont, height } from '../../utils'
import { Vectors } from '../../assets/vectors'
import Header from '../../components/atoms/header'

const HotelDetails = () => {
    return (
        <>
            <KeyboardAvoidingComponent>
                <StatusBar barStyle={"light-content"} translucent={true} backgroundColor='transparent' />
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
                </View>
                <View style={styles.rectStackRow}>
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
                </View>
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