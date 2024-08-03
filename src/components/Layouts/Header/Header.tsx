import {TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {COLORS, fontsApp} from "@src/theme";
import {View} from "react-native";

const Header: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: COLORS.white,
      }}
    >
      <Icon
        name="microsoft-xbox-controller-menu"
        type={Icons.MaterialCommunityIcons}
        size={28}
      />
      <TextCustom
        value={"FilmKu"}
        fontSize={18}
        fontWeight={fontsApp.semiBold}
      />
      <Icon name="search" type={Icons.Ionicons} size={28} />
    </View>
  );
};

export default Header;
