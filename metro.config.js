const {getDefaultConfig, mergeConfig} = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, "lottie"],
    sourceExts: ["jsx", "js", "ts", "tsx", "json"],
    extraNodeModules: {
      "@src": "./src",
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
