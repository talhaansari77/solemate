import { View, Text, Image, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import welcomeImages from "../../../../assets/welocme_images";
import commonStyles from "../../../utils/CommonStyles";
import { Spacer } from "../../../components/Spacer";
import { verticalScale, moderateScale } from "react-native-size-matters";
import { colors } from "../../../utils/Colors";

const Welcome = ({navigation}) => {
  return (
    <View style={commonStyles.commonMain}>
      <ImageBackground
        ImageBackground
        source={welcomeImages.welcome}
        style={[
          commonStyles.img,
          {
            alignItems: "center",
          },
        ]}
      >
        <View style={{ alignItems: "center", height: "100%", width: "100%" }}>
          <Spacer height={verticalScale(100)} />

          <CustomText
            label="SOLE MATE"
            fontFamily="extra"
            fontWeight="700"
            fontSize={verticalScale(35)}
          />
          <CustomText
            label="Refer. Understand.'$' Connect."
            fontFamily="regular"
            color={colors.white}
            marginTop={verticalScale(15)}
            fontSize={verticalScale(12)}
          />
          <View style={{ height: "45%" }}></View>
          <CustomButton
            title="Login"
            fontFamily="bold"
            width="90%"
            marginTop={verticalScale(10)}
            height={verticalScale(45)}
            borderRadius={moderateScale(10)}
            onPress={() => {navigation.navigate("Login")}}
          />
          <CustomText
            label="Sign up"
            fontFamily="bold"
            color={colors.white}
            onPress={()=>{
              navigation.navigate("ViewPager")

            }}
            marginTop={verticalScale(12)}
            fontSize={verticalScale(12)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
