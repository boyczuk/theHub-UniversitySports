import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MainNavigator from "./components/MainNavigator";

export default function App() {
  return <MainNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
});
