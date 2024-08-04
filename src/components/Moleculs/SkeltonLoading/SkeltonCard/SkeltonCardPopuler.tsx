import {COLORS} from "@src/theme";
import {View} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeltonCardPopuler = () => {
  return (
    <SkeletonPlaceholder
      highlightColor={COLORS.gray}
      backgroundColor={COLORS.border}
    >
      <View>
        {Array.from({length: 10}).map((_, index) => (
          <View
            key={index}
            style={{flexDirection: "row", columnGap: 10, marginBottom: 10}}
          >
            <View style={{width: 85, height: 120, borderRadius: 8}} />
            <View style={{width: "100%", gap: 10, paddingVertical: 5}}>
              <View style={{width: "50%", height: 20, borderRadius: 4}} />
              <View style={{width: "30%", height: 20, borderRadius: 4}} />
              <View style={{width: "20%", height: 20, borderRadius: 4}} />
            </View>
          </View>
        ))}
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeltonCardPopuler;
