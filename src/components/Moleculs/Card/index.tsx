import {Gap, TextCustom} from "@src/components/Atoms";
import {fontsApp} from "@src/theme";
import React, {useCallback, useState} from "react";
import {Image, View} from "react-native";
import {Rating} from "@kolking/react-native-rating";
import TextCustom2 from "@src/components/Atoms/TextCustom/TextCustom2";

const CardItem: React.FC = () => {
  const [rating, setRating] = useState(4);

  const handleChange = useCallback(
    (value: number) => setRating(Math.round((rating + value) * 5) / 10),
    [rating]
  );
  return (
    <View
      style={{
        height: 265,
        borderRadius: 8,
        overflow: "hidden",
        borderWidth: 1,
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          width: 120,
          height: "100%",
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&ss",
        }}
      />

      <View style={{padding: 10, flex: 1}}>
        <TextCustom
          fontWeight={fontsApp.semiBold}
          value={"Best Western Premier The Hive"}
          fontSize={16}
        />
        <Gap height={10} />
        <Rating size={15} rating={rating} onChange={handleChange} />
        <Gap height={10} />
        <TextCustom
          fontWeight={fontsApp.medium}
          value={"Best Western Premier The Hive"}
          fontSize={14}
        />
      </View>
    </View>
  );
};

export default CardItem;
