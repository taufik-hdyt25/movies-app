import {fontsApp} from "@src/theme";
import {useTheme} from "@src/theme/ThemeProvider";
import {sized} from "@src/utils/Sizes";
import {Text, TextProps, TextStyle} from "react-native";

interface Props extends TextProps {
  value: string | number;
  style?: TextStyle;
  fontSize?: number | undefined;
  fontWeight?: string;
  color?: string;
}
const TextCustom: React.FC<Props> = ({
  value,
  style,
  fontSize = 14,
  fontWeight = fontsApp.regular,
  color,
  ...props
}): JSX.Element => {
  const {colors} = useTheme();
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: sized(fontSize),
          fontFamily: fontWeight ?? fontWeight,
          color: color ?? colors.text,
        },
        style,
      ]}
    >
      {value}
    </Text>
  );
};

export default TextCustom;
