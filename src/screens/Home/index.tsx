import {Gap, TextCustom} from "@src/components/Atoms";
import {Header} from "@src/components/Layouts";
import {CardItem} from "@src/components/Moleculs";
import {
  actionHomeNowPlaying,
  actionHomePopuler,
} from "@src/libraries/home/home.function";
import {StackProps} from "@src/navigation/types";

import {COLORS, fontsApp} from "@src/theme";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const HomeScreen = ({navigation}: StackProps): JSX.Element => {
  const {data} = actionHomeNowPlaying();
  const {data: moviesPopuler} = actionHomePopuler();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

      <Gap height={20} />
      <ScrollView>
        <View style={styles.containerTitle}>
          <TextCustom
            value={"Now Showing"}
            fontSize={16}
            fontWeight={fontsApp.semiBold}
          />
          <Pressable
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <TextCustom
              fontSize={10}
              value={"Show more"}
              color={COLORS.textGray}
            />
          </Pressable>
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
            </View>
          </ScrollView>
        </View>

        <View style={[styles.containerTitle, {marginTop: 25}]}>
          <TextCustom
            value={"Popular"}
            fontSize={16}
            fontWeight={fontsApp.semiBold}
          />
          <Pressable
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <TextCustom
              fontSize={10}
              value={"See more"}
              color={COLORS.textGray}
            />
          </Pressable>
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
