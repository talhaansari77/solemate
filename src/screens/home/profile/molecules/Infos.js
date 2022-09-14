import { View, Text, Dimensions } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Infos = ({title, infoList=[]}) => {
  return (
    <>
      {/* BasicINFO */}
      <View
        style={{
          width: "100%",
          padding: moderateScale(25),
          // paddingRight: scale(5),
        }}
      >
        <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
          {title}
        </CustomText>
        <Spacer height={10} />

        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {infoList.map((info) => (
            <View
              style={{
                // alignItems: "center",
                width: Dimensions.get("window").width / 2.5,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="ios-location" />
                <CustomText color={colors.orange}>{info.title}</CustomText>
              </View>
              <CustomText marginTop={5} marginLeft={15}>
                {info.label}
              </CustomText>
              <Spacer height={20} />
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default Infos;
