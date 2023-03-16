import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getSansUITextFont } from '../../../utils'
import { Vectors } from '../../../assets/vectors'
import { Matrics } from '../../../utils/matrics'
import { Colors } from '../../../utils/colors'
import { commonStyles } from '../../../utils/styles'
import { useNavigation } from '@react-navigation/native'

const Header = ({ back }) => {
    const navigation = useNavigation()
    return (
        <View>
            {back ?
                <Pressable style={{ paddingHorizontal: Matrics.hs15, width: "10%" }} hitSlop={10} onPress={() => navigation.goBack()}>
                    <Image source={Vectors.back} />
                </Pressable>
                : null
            }
            <View style={[commonStyles.rSpaceCent, styles.mainView]}>
                <View>
                    <Text style={[commonStyles.med14, styles.textView]}>Deliver to</Text>
                    <View style={commonStyles.row}>
                        <Text style={styles.locationText}>Athi river</Text>
                        <Image source={Vectors.downArrow} resizeMode="cover" />
                    </View>

                </View>
                <Image source={Vectors.menu} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainView: { padding: Matrics.hs15, marginVertical: Matrics.vs10 },
    textView: { color: Colors.RED },
    locationText: { fontFamily: getSansUITextFont("Medium"), fontSize: Matrics.ms17 }
})