import { StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import React, { Suspense } from "react";
import { TamaguiProvider } from "tamagui";
import { ButtonDemo } from "./components/ButtonDemo";
import config from "./tamagui.config";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
      {/* <Suspense> */}
      <ButtonDemo />
      {/* </Suspense> */}
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
