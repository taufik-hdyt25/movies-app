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
import {FlatList, ScrollView, View} from "react-native";
import {screenHeight} from "@src/utils/Sizes";
import {Dimensions} from "react-native";

const SearchMovieScreen = ({navigation, route}: StackProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceSearch = useDebounce(searchTerm, 1000);

  const {data, refetch, isLoading, isFetchedAfterMount} =
    actionSearchMovie(debounceSearch);

  useFocusEffect(() => {
    refetch();
  });

  return (
    <View style={{height: "100%"}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 10,
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

      {!isLoading ? (
        <FlatList
          data={data?.results ?? []}
          keyExtractor={(item, index) => index.toString() + "movies"}
          contentContainerStyle={{
            gap: 10,
            paddingVertical: 10,
            flex: data?.results?.length ? 0 : 1,
          }}
          style={{
            paddingHorizontal: 15,
          }}
          ListEmptyComponent={
            debounceSearch && isFetchedAfterMount ? (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <EmptyNotFound />
              </View>
            ) : null
          }
          renderItem={({item, index}) => (
            <CardItem
              type="cardPopuler"
              dataPopuler={item}
              onPress={() => {
                navigation?.push("DetailMovieScreen", {
                  id: String(item?.id),
                });
              }}
            />
          )}
        />
      ) : (
        <SkeltonCardPopiuler />
      )}
    </View>
  );
};

export default SearchMovieScreen;
