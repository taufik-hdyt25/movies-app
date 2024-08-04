import {TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {COLORS, fontsApp} from "@src/theme";
import {ReactNode} from "react";
import {View} from "react-native";

interface IHeaderProps {
  screenTitile?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
const Header: React.FC<IHeaderProps> = ({
  screenTitile,
  leftIcon,
  rightIcon,
}): JSX.Element => {
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
      {leftIcon}
      <TextCustom
        value={screenTitile}
        fontSize={18}
        fontWeight={fontsApp.semiBold}
      />
      {rightIcon}
    </View>
  );
};

export default Header;
