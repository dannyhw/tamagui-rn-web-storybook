import { defineConfig } from "vite";

import { tamaguiPlugin } from "@tamagui/vite-plugin";
export default defineConfig({
  plugins: [
    tamaguiPlugin({
      config: "./src/tamagui.config.ts",
      components: ["tamagui"],
    }),
  ],
});
