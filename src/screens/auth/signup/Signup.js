import { View, Text } from "react-native";
import React, { useState } from "react";
import commonStyles from "../../../utils/CommonStyles";
import SignupWithCon from "./SignupWithCon";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import { verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import ConditionPassCon from "./molecules/ConditionPassCon";

const passData = [
  { id: 1, txt1: "+ 8 characters ", txt2: "+ 1 symbols" },
  { id: 2, txt1: "+ 1 number", txt2: " get our password" },
];

const Signup = () => {
  const [eyeClick, setEyeClick] = useState(true);

  return (
    <View
      style={[
        commonStyles.commonMain,
        {
          padding: 25,
        },
      ]}
    >
      <Spacer height={verticalScale(10)} />
      <CustomText
        label="Sign up"
        fontFamily="bold"
        // color={colors.facebookBlue}
        fontSize={verticalScale(15)}
      />
      <Spacer height={verticalScale(20)} />

      <SignupWithCon />
      <Spacer height={verticalScale(20)} />

      <CustomTextInput withLabel="Email adress" />
      <Spacer height={verticalScale(20)} />

      <CustomTextInput
        withLabel="Password"
        password
        secureTextEntry={eyeClick}
        eyeClick={eyeClick}
        setEyeClick={setEyeClick}
      />
      <Spacer height={verticalScale(20)} />
      <View
        style={{
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {passData?.map((item) => {
          return <ConditionPassCon txt1={item.txt1} txt2={item.txt2} />;
        })}
      </View>
    </View>
  );
};

export default Signup;
