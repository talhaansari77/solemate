import { View, Text } from "react-native";
import React from "react";
import commonStyles from "../../../utils/CommonStyles";
import SignupWithCon from "./SignupWithCon";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import { verticalScale } from "react-native-size-matters";

const Signup = () => {
  return (
    <View
      style={[
        commonStyles.commonMain,
        {
          padding: 15,
        },
      ]}
    >
      <Spacer height={verticalScale(30)}/>
      <SignupWithCon />
      <Spacer height={verticalScale(40)}/>

      <CustomTextInput withLabel="Email adress"
      
      
      />
            <Spacer height={verticalScale(20)}/>

       <CustomTextInput withLabel="Password"
      
    
      />
{/* 
onChangeText={props.onChangeText}
        value={props.value}
        numberOfLines={props.numberOfLines}
        keyboardType={props.keyboardType}
        autoCapitalize="none"
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        secureTextEntry={props.secureTextEntry} */}
      
    </View>
  );
};

export default Signup;
