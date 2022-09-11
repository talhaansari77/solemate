import { View, Text, TextInput } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'
import { Spacer } from '../../../../components/Spacer'
import { moderateScale, scale } from 'react-native-size-matters'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const BirthdayField = () => {
  return (
    <>
    <View>
              <CustomText
              label={'Birthday'}
                color={colors.darkOrange}
                fontFamily={"bold"}
                fontSize={11}
              />
              <Spacer height={10} />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingHorizontal: scale(10),
                  // justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 5 }}>
                  <CustomText label={'Month'}/>
                  <View
                    style={{
                      borderWidth: 1,
                      padding: moderateScale(2),
                      borderRadius: moderateScale(10),
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TextInput style={{ width: "70%" }} />
                    <View>
                      <FontAwesomeIcon name="chevron-down" />
                    </View>
                  </View>
                </View>
                <Spacer width={10} />
                <View style={{ flex: 2 }}>
                  <CustomText label={'Day'}/>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      padding: moderateScale(2),
                      borderRadius: moderateScale(10),
                    }}
                  />
                </View>
                <Spacer width={10} />
                <View style={{ flex: 3 }}>
                  <CustomText>Year</CustomText>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      padding: moderateScale(2),
                      borderRadius: moderateScale(10),
                    }}
                  />
                </View>
              </View>
            </View></>
  )
}

export default BirthdayField