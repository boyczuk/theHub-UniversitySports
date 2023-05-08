import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Navigation bar */}
      <View style={styles.categoryContainer}>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 1</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 2</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 3</Text>
        </View>
        {/* Add more categories as needed */}
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 1</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 2</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 3</Text>
        </View>
        {/* Add more categories as needed */}
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 1</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 2</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Sport Category 3</Text>
        </View>
        {/* Add more categories as needed */}
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryBox: {
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
