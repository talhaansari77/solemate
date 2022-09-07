import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText'
import { verticalScale } from 'react-native-size-matters'

const HeaderConatiner = () => {
  return (
    <View style={styles.mainContainer}>
          <CustomText
            label="Chandler"
            fontFamily="bold"
            fontSize={verticalScale(15)}
            // marginLeft={verticalScale(5)}
          />
    </View>
  )
}

export default HeaderConatiner

const styles = StyleSheet.create({
    mainContainer:{

        shadowColor: colors.gray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 3,
        elevation: 5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    }


})