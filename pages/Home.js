import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const teams = [
    { name: "Team 1", id: 1 },
    { name: "Team 2", id: 2 },
    { name: "Team 3", id: 3 },
    { name: "Team 4", id: 4 },
    { name: "Team 5", id: 5 },
  ];

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {teams.map((team) => (
          <View style={styles.teamButton} key={team.id}>
            <Text style={styles.buttonText}>{team.name}</Text>
          </View>
        ))}
      </ScrollView>
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
    </View>
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
    teamButton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: "#f5f5f5",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      marginRight: 10,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  

export default Home;
