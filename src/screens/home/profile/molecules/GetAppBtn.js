import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../../../utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import CustomButton from "../../../../components/CustomButton";

const GetAppBtn = ({getApp}) => {
  return (
    <>
      {/* Get The App */}
      {getApp ? (
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: verticalScale(10),
            paddingHorizontal: scale(35),
            flexDirection: "row",
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 2,
          }}
        >
          <CustomButton
            title={"Get the Solemate App"}
            fontFamily={"bold"}
            borderRadius={100}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default GetAppBtn;
