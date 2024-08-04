import {Gap, TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {SkeltonDetailMovie} from "@src/components/Moleculs/SkeltonLoading";
import {actionDetailMovie} from "@src/libraries/detail/detail.function";
import {actionPostFavoritelMovie} from "@src/libraries/favorite/favorite.function";
import {StackProps} from "@src/navigation/types";
import {COLORS, fontsApp} from "@src/theme";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const DetailMovieScreen = ({navigation, route}: StackProps): JSX.Element => {
  const {id} = route.params as {id: string};

  const {data, isLoading} = actionDetailMovie(Number(id));
  const {mutate: postFavorite} = actionPostFavoritelMovie(21418153);

  const handleAddFavorite = (media_id?: number) => {
    postFavorite({
      favorite: true,
      media_id: media_id,
      media_type: "movie",
    });
  };

  return (
    <View style={{flex: 1}}>
      {data && !isLoading && (
        <ScrollView>
          <ImageBackground
            style={{
              width: "100%",
              height: 300,
              position: "relative",
            }}
            imageStyle={{
              opacity: 0.8,
            }}
            resizeMode="cover"
            source={{
              uri: `${process.env.IMAGE_BASE_URL}/${data?.backdrop_path}`,
            }}
          >
            <View style={styles.overlay} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <Icon
                name="arrow-left-long"
                type={Icons.FontAwesome6}
                color={COLORS.white}
                onPress={() => navigation?.goBack()}
              />
              <Icon
                name="ellipsis-horizontal-circle-outline"
                type={Icons.Ionicons}
                size={35}
                color={COLORS.white}
              />
            </View>
          </ImageBackground>

          <View style={{padding: 24}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextCustom
                value={data?.title}
                fontSize={20}
                fontWeight={fontsApp.bold}
                color={COLORS.textPrimary}
              />
              <Icon
                type={Icons.Fontisto}
                name="favorite"
                onPress={() => handleAddFavorite(data?.id)}
                color={COLORS.textPrimary}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                marginTop: 8,
              }}
            >
              <Icon
                name="star"
                size={16}
                type={Icons.AntDesign}
                color={COLORS.orange}
              />
              <TextCustom
                value={`${data?.vote_count}/${data?.vote_average} IMDb`}
                color={COLORS.textPrimary}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 8,
                marginTop: 16,
              }}
            >
              {data?.genres?.map((item: IGenres, idx: number) => (
                <View
                  key={idx.toString()}
                  style={{
                    backgroundColor: COLORS.bgBadge,
                    alignSelf: "flex-start",
                    paddingHorizontal: 14,
                    paddingVertical: 4,
                    borderRadius: 100,
                  }}
                >
                  <TextCustom
                    color={COLORS.textBadge}
                    fontSize={8}
                    fontWeight={fontsApp.bold}
                    value={item.name}
                  />
                </View>
              ))}
            </View>

            <View
              style={{
                marginTop: 16,
                flexDirection: "row",
                alignItems: "center",
                gap: 54,
              }}
            >
              <DescriptionDetail
                label="Length"
                value={data?.runtime + " " + "min"}
              />
              <DescriptionDetail
                label="Language"
                value={data?.original_language}
              />
              <DescriptionDetail label="Rating" value={data?.vote_average} />
              <DescriptionDetail label="Status" value={data?.status} />
            </View>

            <View style={{marginTop: 24}}>
              <TextCustom
                fontSize={16}
                fontWeight={fontsApp.bold}
                value={"Description"}
                color={COLORS.textPrimary}
              />
              <TextCustom
                style={{marginTop: 8}}
                color={COLORS.textGray}
                fontSize={12}
                value={data?.overview}
              />
            </View>

            <View style={{marginTop: 20}}>
              <TextCustom
                value={"Production Company"}
                fontSize={16}
                fontWeight={fontsApp.bold}
                color={COLORS.textPrimary}
              />

              <View style={{gap: 5, paddingTop: 10}}>
                {data?.production_companies?.map(
                  (item: IProductCompany, idx: number) => (
                    <View
                      key={idx.toString() + "company"}
                      style={{
                        flexDirection: "row",
                        columnGap: 5,
                        alignItems: "center",
                      }}
                    >
                      {item?.logo_path && (
                        <Image
                          style={{
                            width: 50,
                            height: 50,
                          }}
                          source={{
                            uri: `${process.env.IMAGE_BASE_URL}/${item?.logo_path}`,
                          }}
                        />
                      )}
                      <Gap height={6} />
                      <TextCustom
                        value={item?.name}
                        color={COLORS.textPrimary}
                      />
                    </View>
                  )
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      )}

      {isLoading && <SkeltonDetailMovie />}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Dark overlay with some opacity
  },
});
export default DetailMovieScreen;

interface IDetailProps {
  label: string;
  value: string | undefined | number;
}
const DescriptionDetail = ({label, value}: IDetailProps) => {
  return (
    <View>
      <TextCustom value={label} fontSize={12} color={COLORS.textGray} />
      <TextCustom
        color={COLORS.textPrimary}
        value={value}
        fontWeight={fontsApp.semiBold}
        fontSize={12}
      />
    </View>
  );
};
