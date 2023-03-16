import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getSansUITextFont } from '../../../utils'
import { Vectors } from '../../../assets/vectors'
import { Matrics } from '../../../utils/matrics'
import { Colors } from '../../../utils/colors'
import { commonStyles } from '../../../utils/styles'

const Header = () => {
    return (
        <View style={[commonStyles.rSpaceCent,styles.mainView]}>
            <View>
                <Text style={[commonStyles.med14,styles.textView]}>Deliver to</Text>
                <View style={commonStyles.row}>
                    <Text style={styles.locationText}>Athi river</Text>
                    <Image source={Vectors.downArrow} resizeMode="cover" />
                </View>

            </View>
            <Image source={Vectors.menu} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
mainView:{padding: Matrics.hs15, marginVertical: Matrics.vs10 },
textView:{  color: Colors.RED },
locationText:{ fontFamily: getSansUITextFont("Medium"), fontSize: Matrics.ms17 }
})