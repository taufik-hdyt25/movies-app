import {ButtonCustom, TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {COLORS} from "@src/theme";
import {View} from "react-native";

const CardHeader: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: COLORS.whiteShome,
        padding: 15,
        borderRadius: 8,
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Icon
        name="gift"
        type={Icons.FontAwesome5}
        color={COLORS.btn}
        size={34}
      />
      <TextCustom
        value={"Hemat hingga IDR 413.828 Dengan Memesan Di Aplikasi Trip.com"}
        fontSize={16}
        style={{
          flex: 1,
        }}
      />
      <ButtonCustom
        color={COLORS.primary}
        name="Klaim"
        styleBtn={{paddingHorizontal: 15}}
      />
    </View>
  );
};

export default CardHeader;
