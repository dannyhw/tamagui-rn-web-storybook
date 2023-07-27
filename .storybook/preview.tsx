import "@tamagui/core/reset.css";
import type { Preview } from "@storybook/react";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { View } from "react-native";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <TamaguiProvider config={config}>
          <View style={{ alignItems: "flex-start" }}>
            <Story />
          </View>
        </TamaguiProvider>
      );
    },
  ],
};

export default preview;
