import { TestIds } from "react-native-google-mobile-ads";

// src/config/AdMobConfig.js
const adMobConfig = {
    banner: {
        testBanner: TestIds.BANNER,
        bannerProduction: "ca-app-pub-9903584691242938/9603328475",
    },
    interstial: {
        testBanner: TestIds.INTERSTITIAL,
        interstialProduction: "ca-app-pub-9903584691242938/6405501255",
    }
}

const getAdMobUnitId = () => {
  return {
    banner: __DEV__ ? adMobConfig.banner.testBanner : adMobConfig.banner.bannerProduction,
    interstial: __DEV__ ? adMobConfig.interstial.testBanner : adMobConfig.interstial.interstialProduction
  }
};

export default getAdMobUnitId;

//  config android id ca-app-pub-9903584691242938~1504528369

// banner android ca-app-pub-9903584691242938/9603328475
// insterstisial ca-app-pub-9903584691242938/6405501255