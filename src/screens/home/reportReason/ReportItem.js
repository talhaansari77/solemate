import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from '../../../components/CustomButton'
import { colors } from '../../../utils/Colors'

const ReportItem = ({name, setCount, count, index, }) => {
    <TouchableOpacity 
    onPress={() => {
        setCount(index);
      }}
    /> 
   
  return (
    <View>
       <CustomButton
              marginTop={12}
              fontFamily={"regular"}
              height={45}
              fontSize={12}
              title={name}
              borderWidth={1.1}
              color={count == index ? colors.primary : colors.black}
              borderRadius={15}
              alignItems={"left"}
              paddingHorizontal={15}
            />
                
    </View>
  )
}

export default ReportItem