import {Appearance, Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");
type Colors = {
  text: string;
  textAccent: string;
  background: string;
  btnPrimary: string;
  btnText: string;
  card: string;
};

export const lightModeColors: Colors = {
  text: "#222",
  textAccent: "#444",
  background: "#f5f5f5",
  btnPrimary: "#5D8AA8",
  btnText: "#fff",
  card: "white",
};

export const darkModeColors: Colors = {
  text: "#fff",
  textAccent: "#ccc",
  background: "#222",
  btnPrimary: "#5D8AA8",
  btnText: "black",
  card: "#757575",
};

const isDark = Appearance.getColorScheme() === "dark";
export const colors = isDark ? darkModeColors : lightModeColors;

export const fontsApp = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
};

export const COLORS = {
  primary: "#2246FF",
  textPrimary: "#000",
  gray: "#ABABAB",
  activeColor: "#2246FF",
  inActiveColor: "#ababab",
  white: "#FFF",
  whiteShome: "#F0F1FF",
  btn: "#3364FF",
  orange: "#FFC319",
  border: "#E5E4EA",
  textGray: "#AAA9B1",
  bgBadge: "#DBE3FF",
  textBadge: "#88A4E8",
};

export const SIZES = {
  fontLg: 16,
  font: 14,
  fontSm: 13,
  fontXs: 12,
  //radius
  radiusSm: 8,
  radiusMd: 12,
  radiusfull: 100,

  //space
  padding: 15,
  margin: 15,

  //Font Sizes
  h1: 40,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 16,

  //App dimensions
  width,
  height,
};
