import {TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {COLORS, fontsApp} from "@src/theme";
import {sized} from "@src/utils/Sizes";
import React from "react";
import {Image, Pressable, View} from "react-native";

interface ICardProps {
  type?: string;
  onPress?: () => void;
  dataNowPlaying?: INowPlaying;
  dataPopuler?: INowPlaying;
}
const CardItem: React.FC<ICardProps> = ({
  type,
  onPress,
  dataNowPlaying,
  dataPopuler,
}) => {
  return (
    <>
      {type === "cardShowing" && (
        <View
          style={{
            borderRadius: 8,
            overflow: "hidden",
            width: sized(143),
          }}
        >
          <Pressable onPress={onPress}>
            <Image
              style={{
                width: "100%",
                height: 283,
                resizeMode: "cover",
              }}
              source={{
                uri: `${process.env.IMAGE_BASE_URL}/${dataNowPlaying?.backdrop_path}`,
              }}
            />

            <TextCustom
              fontSize={14}
              fontWeight={fontsApp.bold}
              style={{marginTop: 14}}
              value={dataNowPlaying?.title}
              numberOfLines={2}
            />
          </Pressable>
          <View style={{flexDirection: "row", alignItems: "center", gap: 2}}>
            <Icon
              name="star"
              size={16}
              type={Icons.AntDesign}
              color={COLORS.orange}
            />
            <TextCustom
              value={`${dataNowPlaying?.vote_count}/${dataNowPlaying?.vote_average} IMDb`}
              color={COLORS.textPrimary}
            />
          </View>
        </View>
      )}

      {type === "cardPopuler" && (
        <View style={{flexDirection: "row", columnGap: 16}}>
          <Pressable onPress={onPress}>
            <Image
              style={{
                height: 128,
                width: 85,
                borderRadius: 8,
              }}
              source={{
                uri: `${process.env.IMAGE_BASE_URL}/${dataPopuler?.backdrop_path}`,
              }}
            />
          </Pressable>
          <View style={{paddingTop: 2, flex: 1}}>
            <TextCustom
              fontSize={14}
              fontWeight={fontsApp.bold}
              value={"Venom Let ThereBe Carnage"}
              numberOfLines={2}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                marginVertical: 5,
              }}
            >
              <Icon
                name="star"
                size={16}
                type={Icons.AntDesign}
                color={COLORS.orange}
              />
              <TextCustom
                value={`${dataPopuler?.vote_count}/${dataPopuler?.vote_average} IMDb`}
                color={COLORS.textPrimary}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Icon size={14} name="clock" type={Icons.Feather} />
              <TextCustom fontSize={12} value={dataPopuler?.release_date} />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CardItem;
