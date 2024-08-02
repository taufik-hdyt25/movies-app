import {Dimensions, PixelRatio, Platform} from "react-native";

// Mendapatkan ukuran layar perangkat
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

// Fungsi untuk membuat ukuran width responsif
export const sWidth = (width: any) => {
  const elemWidth = parseFloat(width);
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 375); // 375 adalah lebar standar desain (misalnya iPhone 6/7/8)
};

// Fungsi untuk membuat ukuran height responsif
export const sHight = (height: any) => {
  const elemHeight = parseFloat(height);
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 667); // 667 adalah tinggi standar desain (misalnya iPhone 6/7/8)
};

// Fungsi untuk membuat ukuran border radius responsif
export const sRadius = (size: any) => {
  const elemSize = parseFloat(size);
  const smallerDimension =
    SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;
  return PixelRatio.roundToNearestPixel((smallerDimension * elemSize) / 375); // Berdasarkan lebar standar desain
};
