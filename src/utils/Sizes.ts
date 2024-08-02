import {useEffect, useState} from "react";
import {Dimensions, PixelRatio, Platform} from "react-native";

// ukuran devices dari hp ke tab
// 1. iPhone SE (2020): 4.7 inci, 750 x 1334 piksel sampai OnePlus 8: 6.55 inci, 1080 x 2400 piksel
// 2. iPad Mini (2021): 8.3 inci, 1488 x 2266 piksel sampai Microsoft Surface Go 2: 10.5 inci, 1920 x 1280 piksel

const {width: screenWidth, height: screenHeight} = Dimensions.get("window");
const isIpad = screenWidth >= 800;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

// Based on iPhone 8's scale
const scale = (size: number | 0) => (screenHeight / 812) * size;

const sized = (size: number | 0) => {
  const newSize = scale(size);
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export {
  screenHeight,
  screenWidth,
  isIpad,
  verticalScale,
  horizontalScale,
  sized,
};
