import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { appColors } from '../../../utils/Colors'
import CustomText from '../../../components/CustomText'
import { verticalScale } from 'react-native-size-matters'
const SignupWithCon = () => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.childContainer}>
        <CustomText
            label="FACEBOOK"
            fontFamily="bold"
            color={appColors.facebookBlue}
            fontSize={verticalScale(15)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.childContainer}>
        <CustomText
            label="GOOGEL"
            fontFamily="bold"
            color={appColors.googleGreen}
            fontSize={verticalScale(15)}
          />
        </TouchableOpacity>
    </View>
  )
}
export default SignupWithCon
const styles = ScaledSheet.create({
    mainContainer:{
        width:"100%",
        height:"55@vs",
        backgroundColor:appColors.white,
        borderRadius:"10@s",
        borderWidth:1.2,
        borderColor:appColors.lightGray,
        flexDirection:"row",
        shadowColor: appColors.lightGray,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 5,
        

    },
    childContainer:{
        width:"50%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    }

})