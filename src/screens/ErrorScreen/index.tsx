import {TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {COLORS} from "@src/theme";
import {DevSettings, TouchableOpacity, View} from "react-native";

const ErrorScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View style={{flexDirection: "row", columnGap: 5}}>
        <Icon name="disconnect" type={Icons.AntDesign} size={50} />
        <TextCustom value={"No Connection"} fontSize={34} />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.textBadge,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 100,
        }}
        onPress={() => {
          DevSettings.reload();
        }}
      >
        <TextCustom value={"Refresh"} fontSize={16} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default ErrorScreen;
