import { View, FlatList } from "react-native";
import UploadPicture from "./UploadPicture";
import styled from "react-native-styled-components";

const PictureBox = () => {
  return (
    <View>
      <FlatList
        data={[1, 2]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => (
          <VerticalPadding>
            <UploadPicture editable={true} />
          </VerticalPadding>
        )}
        renderItem={() => (
          <UploadPicture height={130} width={100} marginLeft={10} />
        )}
      />
    </View>
  );
};

export default PictureBox;

const VerticalPadding = styled(View, {
  paddingVertical: 20,
});
