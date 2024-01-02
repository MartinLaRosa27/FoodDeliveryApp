import { StatusBar } from "expo-status-bar";
import Navigation from "./Navigation";
import { themeColors } from "./styles";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={themeColors.bgColor(1)} />
      <Navigation />
    </>
  );
}
