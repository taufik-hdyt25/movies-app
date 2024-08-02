import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {CardHeader} from "./Components";
import {COLORS, fontsApp} from "@src/theme";
import {Header} from "@src/components/Layouts";
import {Gap, TextCustom} from "@src/components/Atoms";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {CardItem} from "@src/components/Moleculs";

const HomeScreen: React.FC = ({navigation}: any): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        <CardHeader />
      </View>
      <View style={{marginBottom: 20}}>
        <Header />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            columnGap: 15,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              padding: 10,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 15,
              flex: 1,
            }}
          >
            <View>
              <TextCustom
                value={"Jakarta Timur, Indonesia"}
                fontWeight={fontsApp.medium}
                fontSize={16}
              />
              <TextCustom
                value={"21 Jul-22 Jul | Dewasa"}
                fontWeight={fontsApp.medium}
                fontSize={16}
              />
            </View>
            <Icon type={Icons.Ionicons} name="search" size={34} />
          </View>

          <View>
            <Icon
              color={COLORS.white}
              type={Icons.Ionicons}
              name="location-outline"
              size={28}
            />
            <TextCustom fontSize={16} value={"Peta"} color={COLORS.white} />
          </View>
        </View>
        <Gap height={20} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
              paddingHorizontal: 15,
            }}
          ></View>
        </ScrollView>
      </View>

      <View
        style={{
          height: 300,
          backgroundColor: COLORS.whiteShome,
          flex: 1,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        <CardItem />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  selectStyle: {
    fontFamily: fontsApp.semiBold,
  },
});

export default HomeScreen;
