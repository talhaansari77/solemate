import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
// import { Ionicons } from "@expo/vector-icons";
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';

// import { ActivityIndicator } from "react-native-paper";
import { colors } from '../utils/Colors'; 
function CustomButton({
  loading,
  title,
  onPress,
  icon,
  color,
  width,
  height,
  borderColor,
  borderRadius,
  marginTop,
  alignItems,
  justifyContent,
  borderWidth,
  backgroundColor,
  fontFamily,
  marginBottom,
  marginHorizontal,
  opacity,
  fontSize
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: backgroundColor || colors.primary,
          width: width || '100%',
          height: height || verticalScale(40),
          borderColor: borderColor ,
          borderRadius: borderRadius || 8,
          // borderWidth: borderWidth || 1.2,
          opacity:opacity,
          alignItems: alignItems || 'center',
          justifyContent: justifyContent || 'center',
          marginTop,
          marginBottom:marginBottom,
          marginHorizontal:marginHorizontal
        },
      ]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} size={moderateScale(26)} />
      ) : (
        <View style={{ flexDirection: 'row', }}>
          <Text
            style={[
              {
                color: color || colors.white,
                fontSize: fontSize||  verticalScale(15),
                fontFamily: fontFamily 
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}


export default CustomButton;
