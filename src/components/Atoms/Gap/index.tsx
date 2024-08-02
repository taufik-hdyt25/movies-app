import {sized} from "@src/utils/Sizes";
import {View} from "react-native";

type Props = {
  width?: number;
  height?: number;
};
const Gap: React.FC<Props> = ({height = 0, width = 0}): JSX.Element => {
  return (
    <View
      style={{
        height: sized(height),
        width: sized(width),
      }}
    />
  );
};

export default Gap;
