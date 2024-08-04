import Icon, {Icons} from "@src/components/Atoms/Icon";
import {Header} from "@src/components/Layouts";
import {CardItem} from "@src/components/Moleculs";
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
  const {data, isLoading, refetch} = actionMovies(page);
  const [dataResult, setDataResult] = useState<IResponseMovies>({
    page: 1,
    results: data?.results,
    total_pages: 0,
    total_results: 0,
  });

  useEffect(() => {
    const getMovies = () => {
      setDataResult((prev: IResponseMovies) => ({
        ...data,
        results: [...prev?.results, ...data?.results],
      }));
      setLoadingMore(false);
    };

    getMovies();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setLoadingMore(true);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    refetch();
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
          data={dataResult?.results}
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
              <View style={{height: 10}} />
            ) : (
              <ActivityIndicator color={COLORS.gray} />
            )
          }
          ListHeaderComponent={<View style={{height: 10}} />}
        />
      )}
    </View>
  );
};

export default MovieScreen;
