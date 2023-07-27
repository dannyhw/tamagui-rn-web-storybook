import { Text } from "react-native";

export default {
  title: "Testing",
  component: ({ text }: any) => <Text style={{ color: "green" }}>{text}</Text>,
};

export const Basic = {
  args: { text: "hello" },
};
