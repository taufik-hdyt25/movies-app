import {COLORS} from "@src/theme";
import {Dimensions, View} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeltonDetailMovie = () => {
  return (
    <SkeletonPlaceholder
      highlightColor={COLORS.gray}
      backgroundColor={COLORS.border}
    >
      <View style={{gap: 10}}>
        <View style={{width: "100%", height: 200, borderRadius: 8}} />
        <View style={{width: "80%", height: 20, borderRadius: 8}} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeltonDetailMovie;
