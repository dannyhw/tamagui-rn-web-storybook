import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        // modulesToTranspile: ["react-native-reanimated", "tamagui"],
        // babelPlugins: [
        //   "@babel/plugin-proposal-export-namespace-from",
        //   "react-native-reanimated/plugin",
        // ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
  env: (config) => ({
    ...config,
    TAMAGUI_TARGET: "web",
  }),
};
export default config;
