import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale } from "react-native-size-matters";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const IceBreakQField = () => {
  const questions = [1, 2, 3];
  return (
    <>
      <View>
        <CustomText
          label={"Ice Breaker Question"}
          color={colors.darkOrange}
          fontFamily={"bold"}
          fontSize={11}
        />

        <Spacer height={10} />

        <View>
          {questions.map((q) => (
            <>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  borderWidth: 1,
                  padding: moderateScale(15),
                  borderRadius: moderateScale(10),
                  borderStyle: "dashed",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "80%" }}>
                  <CustomText fontSize={12}>
                    The Last Time I Cried Was!
                  </CustomText>
                  <CustomText color={colors.gray}>
                    The Last Time I Cried My Heat Out!
                  </CustomText>
                </View>
                <View
                  style={{
                    backgroundColor: colors.primary,
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon name="plus" color={colors.white} />
                </View>
              </TouchableOpacity>
              <Spacer height={10} />
            </>
          ))}
        </View>
      </View>
    </>
  );
};

export default IceBreakQField;
