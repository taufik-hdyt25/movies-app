import {TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {fontsApp} from "@src/theme";

import {View} from "react-native";

const EmptyNotFound = () => {
  return (
    <View>
      <View style={{flexDirection: "row", alignItems: "center", columnGap: 10}}>
        <Icon name="file-movie-o" type={Icons.FontAwesome} size={34} />
        <TextCustom
          value={"Movie Not Found"}
          fontSize={18}
          fontWeight={fontsApp.semiBold}
        />
      </View>
    </View>
  );
};

export default EmptyNotFound;
