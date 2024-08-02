import Gap from "components/atoms/Gap";
import Icon, {Icons} from "components/atoms/Icon";
import TextCustom from "components/atoms/TextCustom/TextCustom";
import {Image, View} from "react-native";
import {fontsApp} from "theme";
import {useTheme} from "theme/ThemeProvider";
import {isIpad, screenHeight, screenWidth, verticalScale} from "utils/Sizes";

const CardResponsif = () => {
  const numColumns = isIpad ? 3 : 2; // cek ketika dia isIpad maka menjadi 3 kolom
  const cardWidth = (screenWidth - (numColumns + 1) * 10) / numColumns; // perhitungan width menyesuaikan
  const cardHeight = screenHeight * 0.6 * (1 / 2); // mengambil ratio height agar bisa responsif di semua devices
  const {colors} = useTheme();
  return (
    <View
      style={{
        height: cardHeight,
        borderRadius: 8,
        width: cardWidth,
        backgroundColor: colors.card,
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "50%",
          resizeMode: "cover",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
        source={{
          uri: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-47597525/brd-44261_sepatu-sneakers-olahraga-pria-model-tali_full01.jpg",
        }}
      />

      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          justifyContent: "space-between",
          height: "50%",
        }}
      >
        <View>
          <TextCustom
            numberOfLines={2}
            fontWeight={fontsApp.semiBold}
            fontSize={14}
            value="Sepatu Murah Meriah Harga Terjangkau Asik bikin kamu jadi keren"
          />
          <Gap height={10} />
          <TextCustom
            value="Rp 1.500.000"
            fontSize={18}
            fontWeight={fontsApp.bold}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            columnGap: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon type={Icons.AntDesign} name="minuscircle" />
          <TextCustom value={0} fontSize={16} fontWeight={fontsApp.semiBold} />
          <Icon type={Icons.AntDesign} name="pluscircle" />
        </View>
      </View>
    </View>
  );
};

export default CardResponsif;
