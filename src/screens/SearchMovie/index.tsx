import {useFocusEffect} from "@react-navigation/native";
import Icon, {Icons} from "../../components/Atoms/Icon";
import {CardItem} from "../../components/Moleculs";
import EmptyNotFound from "../../components/Moleculs/Empty";
import {SkeltonCardPopiuler} from "../../components/Moleculs/SkeltonLoading";
import useDebounce from "../../hooks/useDebounce";
import {actionSearchMovie} from "../../libraries/search/search.function";
import {StackProps} from "@src/navigation/types";
import {COLORS, fontsApp} from "../../theme";
import {Input} from "@ui-kitten/components";
import {useState} from "react";
import {ScrollView, View} from "react-native";

const SearchMovieScreen = ({navigation, route}: StackProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceSearch = useDebounce(searchTerm, 1000);

  const {data, refetch, isLoading} = actionSearchMovie(debounceSearch);

  useFocusEffect(() => {
    refetch();
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
        }}
      >
        <Icon
          name="arrow-back-outline"
          type={Icons.Ionicons}
          onPress={() => {
            setSearchTerm("");
            navigation?.goBack();
          }}
        />
        <Input
          style={{
            backgroundColor: COLORS.textGray,
            flex: 1,
            borderRadius: 100,
          }}
          placeholder="Search Movie"
          placeholderTextColor={COLORS.white}
          textStyle={{
            fontFamily: fontsApp.regular,
            color: COLORS.white,
          }}
          onChangeText={(e) => setSearchTerm(e)}
        />
        <Icon name="search" type={Icons.Ionicons} />
      </View>

      <ScrollView>
        <View style={{gap: 10, paddingHorizontal: 10, marginBottom: 10}}>
          {data?.results?.map((data: INowPlaying, idx: number) => (
            <CardItem
              key={idx.toString() + "search"}
              type="cardPopuler"
              dataPopuler={data}
              onPress={() => {
                navigation?.push("DetailMovieScreen", {
                  id: String(data?.id),
                });
              }}
            />
          ))}
        </View>
      </ScrollView>

      {debounceSearch && !data?.results?.length && <EmptyNotFound />}
      {isLoading && <SkeltonCardPopiuler />}
    </View>
  );
};

export default SearchMovieScreen;
