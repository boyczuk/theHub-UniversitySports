import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BottomNavbar from "./components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <BottomNavbar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
});
