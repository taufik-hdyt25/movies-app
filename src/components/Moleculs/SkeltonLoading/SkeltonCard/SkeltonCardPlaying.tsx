import {COLORS} from "@src/theme";
import {View} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeltonCardPlaying = () => {
  return (
    <SkeletonPlaceholder
      highlightColor={COLORS.gray}
      backgroundColor={COLORS.border}
    >
      <View style={{flexDirection: "row", gap: 10}}>
        {Array.from({length: 10}).map((_, index) => (
          <View key={index} style={{gap: 5}}>
            <View style={{width: 143, height: 212, borderRadius: 8}} />
            <View style={{width: "80%", height: 20, borderRadius: 4}} />
            <View style={{width: "20%", height: 20, borderRadius: 4}} />
          </View>
        ))}
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeltonCardPlaying;
