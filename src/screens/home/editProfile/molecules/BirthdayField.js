import { View, Text, TextInput } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const BirthdayField = ({ onChangeText, value, error }) => {
  return (
    <>
      <View>
        <CustomText
          label={"Birthday"}
          color={colors.darkOrange}
          fontFamily={"regular"}
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
            <CustomText
              color={colors.gray}
              label={"Month"}
              // value={month}
              // onChangeText={(mnt) => {
              //   setMonth(mnt),
              //     setSubmitError({ ...submitError, monthError: "" });
              // }}
              // error={submitError.monthError}
            />
            <View
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(7),
                height: verticalScale(25),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: scale(5),
              }}
            >
              <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="January"
                placeholderTextColor={"#5B5B5B"}
                style={{ width: "70%" }}
              />
              
              <View>
                <FontAwesomeIcon name="chevron-down" />
              </View>
              
            </View>
            {error ? (
                <CustomText
                  color={colors.red}
                  fontFamily={"medium"}
                  fontSize={11}
                  marginTop={4}
                >
                  * {error}
                </CustomText>
               ) : null} 
          </View>
          <Spacer width={10} />
          <View style={{ flex: 2 }}>
            <CustomText label={"Day"} color={colors.gray} />
            <TextInput
              placeholder="20"
              placeholderTextColor={"#5B5B5B"}
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(7),
                height: verticalScale(25),
                paddingHorizontal: 5,
              }}
            />
          </View>
          <Spacer width={10} />
          <View style={{ flex: 3 }}>
            <CustomText color={colors.gray}>Year</CustomText>
            <TextInput
              placeholder="1994"
              placeholderTextColor={"#5B5B5B"}
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(7),
                height: verticalScale(25),
                paddingHorizontal: 5,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default BirthdayField;
