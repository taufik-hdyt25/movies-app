import {useFocusEffect} from "@react-navigation/native";
import {TextCustom} from "@src/components/Atoms";
import {Header} from "@src/components/Layouts";
import {CardItem} from "@src/components/Moleculs";
import {SkeltonCardPopiuler} from "@src/components/Moleculs/SkeltonLoading";
import {actionGetFavorite} from "@src/libraries/favorite/favorite.function";
import {ScrollView, View} from "react-native";

const FavoriteScreen = () => {
  const {data, refetch, isLoading} = actionGetFavorite(21418153);

  useFocusEffect(() => {
    refetch();
  });

  return (
    <View>
      <Header screenTitile="Movie Favorite" />
      <ScrollView>
        <View style={{padding: 15, gap: 10}}>
          {data?.results?.map((data: INowPlaying, idx: number) => (
            <CardItem
              dataPopuler={data}
              type="cardPopuler"
              key={idx.toString() + "favorite"}
            />
          ))}
          {isLoading && <SkeltonCardPopiuler />}
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;
