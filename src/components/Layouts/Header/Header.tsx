import {TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {COLORS, colors, fontsApp} from "@src/theme";
import {View} from "react-native";

const Header: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
      }}
    >
      <View style={{flexDirection: "row", alignItems: "center", gap: 1}}>
        <TextCustom
          color={COLORS.white}
          value={"Trip"}
          fontSize={24}
          fontWeight={fontsApp.semiBold}
        />
        <View style={{width: 5, height: 5, backgroundColor: COLORS.orange}} />
        <TextCustom
          color={COLORS.white}
          value={"com"}
          fontSize={18}
          fontWeight={fontsApp.semiBold}
        />
      </View>

      <View style={{flexDirection: "row", alignItems: "center", gap: 20}}>
        <Icon name="user" type={Icons.FontAwesome} color={colors.background} />

        <View>
          <Icon
            name="currency-exchange"
            type={Icons.MaterialIcons}
            color={colors.background}
            size={18}
          />
          <TextCustom
            value={"IDR"}
            color={COLORS.whiteShome}
            fontWeight={fontsApp.medium}
          />
        </View>
        <Icon
          name="menu"
          type={Icons.Entypo}
          color={colors.background}
          size={28}
        />
      </View>
    </View>
  );
};

export default Header;
