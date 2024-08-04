import {Gap, TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {Header} from "@src/components/Layouts";
import {CardItem} from "@src/components/Moleculs";
import {
  SkeltonCardPlaying,
  SkeltonCardPopiuler,
} from "@src/components/Moleculs/SkeltonLoading";

import {
  actionHomeNowPlaying,
  actionHomePopuler,
} from "@src/libraries/home/home.function";
import {StackProps} from "@src/navigation/types";

import {COLORS, fontsApp} from "@src/theme";
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";

const HomeScreen = ({navigation}: StackProps): JSX.Element => {
  const {data, isLoading: loadingPlaying} = actionHomeNowPlaying();
  const {data: moviesPopuler, isLoading: loadingPopuler} = actionHomePopuler();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        screenTitile="Movies App"
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

      <ScrollView>
        <View style={styles.containerTitle}>
          <TextCustom
            value={"Now Showing"}
            fontSize={16}
            fontWeight={fontsApp.semiBold}
            color={COLORS.textPrimary}
            style={{marginTop: 15}}
          />
        </View>

        <View style={{marginTop: 16}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
              }}
            >
              {data?.results
                ?.slice(0, 10)
                .map((data: INowPlaying, idx: number) => (
                  <CardItem
                    type="cardShowing"
                    key={idx.toString()}
                    onPress={() =>
                      navigation?.navigate("DetailMovieScreen", {
                        id: String(data?.id),
                      })
                    }
                    dataNowPlaying={data}
                  />
                ))}
              {loadingPlaying && <SkeltonCardPlaying />}
            </View>
          </ScrollView>
        </View>

        <View style={[styles.containerTitle, {marginTop: 25}]}>
          <TextCustom
            value={"Popular"}
            fontSize={16}
            fontWeight={fontsApp.semiBold}
            color={COLORS.textPrimary}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
            gap: 10,
            marginBottom: 10,
          }}
        >
          {moviesPopuler?.results
            ?.slice(0, 20)
            .reverse()
            .map((data: INowPlaying, index: number) => (
              <CardItem
                key={"movies_populer" + index.toString()}
                type="cardPopuler"
                dataPopuler={data}
                onPress={() =>
                  navigation?.navigate("DetailMovieScreen", {
                    id: String(data?.id),
                  })
                }
              />
            ))}

          {loadingPopuler && <SkeltonCardPopiuler />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
