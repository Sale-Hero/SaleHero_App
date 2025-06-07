const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);