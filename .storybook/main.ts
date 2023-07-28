import type { StorybookConfig } from "@storybook/react-webpack5";

const { shouldExclude } = require("tamagui-loader");
const tamaguiOptions = {
  config: "./tamagui.config.ts",
  components: ["tamagui", "@tamagui/lucide-icons", "@tamagui/core"],
  importsWhitelist: ["constants.js", "colors.js"],
  logTimings: true,
  disableExtraction: process.env.NODE_ENV === "development",
};

const path = require("path");
const webpack = require("webpack");

export type Options = {
  modulesToTranspile?: string[];
  modulesToAlias?: { [key: string]: string };
  babelPlugins?: string[];
  projectRoot?: string;
};

const getModule = (name: string) => path.join("node_modules", name);

// copied from https://github.com/expo/expo-cli/blob/master/packages/webpack-config/src/loaders/createBabelLoader.ts
const DEFAULT_INCLUDES = [
  getModule("react-native"),
  getModule("react-navigation"),
  getModule("expo"),
  getModule("unimodules"),
  getModule("@react"),
  getModule("@expo"),
  getModule("@use-expo"),
  getModule("@unimodules"),
  getModule("native-base"),
  getModule("styled-components"),
  getModule("tamagui"),
];

const DEFAULT_EXCLUDES = [
  "/node_modules",
  "/bower_components",
  "/.expo/",
  // Prevent transpiling webpack generated files.
  "(webpack)",
];

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    // return config;
    // Add __DEV__ global variable which is relied on by many libraries
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || "development"
        ),
        __DEV__: process.env.NODE_ENV !== "production" || true,
        TAMAGUI_TARGET: "web",
      })
    );

    // plugin suggested in reanimated docs https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/web-support/
    config.plugins.push(new webpack.DefinePlugin({ process: { env: {} } }));

    const root = process.cwd();
    const modules = [...DEFAULT_INCLUDES];

    config.module.rules.push({
      test: /\.[jt]sx?$/,
      include(filename: string) {
        if (!filename) {
          return false;
        }

        for (const possibleModule of modules) {
          if (filename.includes(path.normalize(possibleModule))) {
            return true;
          }
        }

        if (filename.includes(root)) {
          for (const excluded of DEFAULT_EXCLUDES) {
            if (filename.includes(path.normalize(excluded))) {
              return false;
            }
          }
          return true;
        }
        return false;
      },
      // you'll likely want to adjust this helper function,
      // but it serves as a decent start that you can copy/paste from
      exclude: (path) => shouldExclude(path, process.cwd(), tamaguiOptions),
      use: {
        loader: "tamagui-loader",
        options: tamaguiOptions,
      },
    });

    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    config.resolve.alias = {
      "react-native$": "react-native-web",
      ...config.resolve.alias,
    };

    return config;
  },
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
