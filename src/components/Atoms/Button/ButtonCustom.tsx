import {COLORS} from "@src/theme";
import {useTheme} from "@src/theme/ThemeProvider";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface Props extends TouchableOpacityProps {
  name?: string;
  styleBtn?: ViewStyle;
  height?: number;
  color?: string;
}
const ButtonCustom: React.FC<Props> = ({
  name,
  styleBtn,
  height = 40,
  color,
  disabled,
  ...props
}): JSX.Element => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          height: height,
          backgroundColor: disabled ? COLORS.gray : color ?? colors.btnPrimary,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        },
        styleBtn,
      ]}
      {...props}
    >
      <Text
        style={{
          fontWeight: "600",
          color: colors.btnText,
          fontFamily: "Poppins-SemiBold",
        }}
      >
        {name}
      </Text>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default ButtonCustom;
