import Icon, {Icons} from "@src/components/Atoms/Icon";
import {Header} from "@src/components/Layouts";
import {CardItem} from "@src/components/Moleculs";
import {getMovies} from "@src/libraries/movies/movies.api";
import {actionMovies} from "@src/libraries/movies/movies.function";
import {IResponseMovies} from "@src/libraries/movies/movies.types";
import {StackProps} from "@src/navigation/types";
import {COLORS} from "@src/theme";
import {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, View} from "react-native";

const MovieScreen = ({navigation}: StackProps) => {
  const [page, setPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  // const {data, isLoading, refetch} = actionMovies(1);

  const getMovie = async () => {
    try {
      const response = await getMovies(1);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      setPage(page + 1);
      const response = await getMovies(page);
      setData({
        page: response?.page,
        results: [...data?.results, ...response?.results],
        total_pages: response?.total_pages,
        total_results: response?.total_results,
      });
      setLoadingMore(false);
    } catch (error) {
      console.log(error);
      setLoadingMore(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getMovie();
    setRefreshing(false);
  };
  return (
    <View style={{flex: 1}}>
      <Header
        screenTitile="Movies"
        rightIcon={
          <Icon
            onPress={() => navigation?.push("SearchMovieScreen")}
            name="search"
            type={Icons.Ionicons}
            size={28}
            color={COLORS.textPrimary}
          />
        }
      />
      {isLoading ? (
        <ActivityIndicator
          style={{flex: 1}}
          size={"large"}
          color={COLORS.gray}
        />
      ) : (
        <FlatList
          data={data?.results}
          numColumns={3}
          keyExtractor={(item, idx) => idx.toString() + "movies"}
          contentContainerStyle={{gap: 10}}
          columnWrapperStyle={{gap: 10}}
          showsVerticalScrollIndicator={false}
          style={{paddingHorizontal: 10}}
          onEndReachedThreshold={0.1}
          onEndReached={handleLoadMore}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          renderItem={({item, index}) => (
            <CardItem
              type="movies"
              onPress={() =>
                navigation?.navigate("DetailMovieScreen", {
                  id: String(item?.id),
                })
              }
              movies={item}
            />
          )}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color={COLORS.gray} />
            ) : (
              <View style={{height: 10}} />
            )
          }
          ListHeaderComponent={<View style={{height: 10}} />}
        />
      )}
    </View>
  );
};

export default MovieScreen;
