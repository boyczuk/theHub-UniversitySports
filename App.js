import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BottomNavbar from "./components/Navbar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import TeamHome from "./pages/subpages/TeamHome";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <BottomNavbar />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
});
