module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@tamagui/babel-plugin",
        { components: ["tamagui"], config: "./tamagui.config.ts" },
      ],
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET"],
        },
      ],
      // "@babel/plugin-proposal-export-namespace-from",
      // "react-native-reanimated/plugin",
    ],
  };
};
