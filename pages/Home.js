import React, { useState } from "react";
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles/HomeStyles";
import TeamHome from "./subpages/TeamHome";

const teams = [
  { name: "Team 1", id: 1 },
  { name: "Team 2", id: 2 },
  { name: "Team 3", id: 3 },
  { name: "Team 4", id: 4 },
  { name: "Team 5", id: 5 },
];

const Home = () => {
  const navigation = useNavigation();

  const navigateToTeamHome = () => {
    // Modify so that key of team is passed
    // displaying actual team
    navigation.navigate("TeamHome");
  };

  return (
    <View style={styles.container}>
      {/* favourite teams */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.buttonContainer}>
          {teams.map((team) => (
            <View style={styles.teamButton} key={team.id}>
              <Button title={team.name} onPress={navigateToTeamHome} />
            </View>
          ))}
        </View>
      </ScrollView>

      <ScrollView>
        <View style={styles.container}>
          {/* user feed */}
          <View style={styles.categoryContainer}>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>
                News or other information can be stored here
              </Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}></Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}></Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}></Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}></Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}></Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}></Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}></Text>
            </View>
            {/* Add more categories as needed */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
