// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  // Alias react-native-maps to the stub file when bundling for web.
  'react-native-maps': require.resolve('./react-native-maps.web.js'),
};

module.exports = defaultConfig;