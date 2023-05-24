import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/TeamHomeStyle";

{
  /* These stats can be imported externally via scraping or api 
     Also at some point need to separate each subpage here into their 
     own react component so that it can be more efficient when updating/collecting info
  */
}
const teams = [
  { name: "Team 1", logo: require("./images/favicon.png"), id: 1 },
  { name: "Team 2", logo: require("./images/favicon.png"), id: 2 },
  { name: "Team 3", logo: require("./images/favicon.png"), id: 3 },
  { name: "Team 4", logo: require("./images/favicon.png"), id: 4 },
  { name: "Team 5", logo: require("./images/favicon.png"), id: 5 },
];

const previousGames = [
  { opponent: "Team A", score: "86-91", result: "Loss" },
  { opponent: "Team B", score: "110-98", result: "Win" },
  { opponent: "Team C", score: "105-103", result: "Win" },
  { opponent: "Team D", score: "99-105", result: "Loss" },
  { opponent: "Team E", score: "102-92", result: "Win" },
  { opponent: "Team F", score: "88-90", result: "Loss" },
];

const teamStats = [
  { PPG: "112.9" },
  { Pace: "96.5" },
  { FGP: "45.9" },
  { FG_3PT: "10.7" },
  { FGP_3PT: "33.5" },
  { FTP: "78.4" },
  { Rebounds: "43.0" },
  { ORebounds: "12.7" },
  { Assists: "23.9" },
  { Steals: "9.4" },
];

const playerStats = [
  {
    name: "P. Siakam",
    num: 43,
    G: 71,
    GS: 71,
    PER: 25.8,
    USGP: 27.3,
    MPG: 37.4,
    PPG: 24.2,
    APG: 5.8,
    REB: 7.8,
    P_FG: 0.48,
    P_3PT: 0.324,
    P_FT: 0.774,
    STL: 0.9,
    BLK: 0.5,
  },
  {
    name: "Fred VanVleet",
    num: 23,
    G: 71,
    GS: 71,
    PER: 25.8,
    USGP: 27.3,
    MPG: 37.4,
    PPG: 24.2,
    APG: 5.8,
    REB: 7.8,
    P_FG: 0.48,
    P_3PT: 0.324,
    P_FT: 0.774,
    STL: 0.9,
    BLK: 0.5,
  },
  {
    name: "Gary Trent",
    num: 33,
    G: 71,
    GS: 71,
    PER: 25.8,
    USGP: 27.3,
    MPG: 37.4,
    PPG: 24.2,
    APG: 5.8,
    REB: 7.8,
    P_FG: 0.48,
    P_3PT: 0.324,
    P_FT: 0.774,
    STL: 0.9,
    BLK: 0.5,
  },
];

const players = [
  {
    id: 1,
    name: "Pascal Siakam",
    jerseyNumber: 43,
    position: "Forward",
  },
  {
    id: 2,
    name: "Fred VanVleet",
    jerseyNumber: 23,
    position: "Guard",
  },
  {
    id: 3,
    name: "Gary Trent",
    jerseyNumber: 33,
    position: "Guard",
  },
  {
    id: 4,
    name: "OG Anunoby",
    jerseyNumber: 3,
    position: "Forward",
  },
  {
    id: 5,
    name: "Scottie Barnes",
    jerseyNumber: 4,
    position: "Forward",
  },
];

const TeamStatsTable = ({ teamStats }) => {
  return (
    <View style={styles.container}>
      {teamStats.map((stat, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{Object.keys(stat)[0]}</Text>
          <Text style={styles.value}>{Object.values(stat)[0]}</Text>
        </View>
      ))}
    </View>
  );
};

{
  /* Fix later */
}
const PlayerStatsTable = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          {playerStats.map((player, index) => (
            <View key={index} style={styles.playerRow}>
              <View style={styles.nameNumContainer}>
                <Text style={styles.nameText}>{player.name}</Text>
                <Text style={styles.numText}>#{player.num}</Text>
              </View>
              <View style={styles.statsContainer}>
                {Object.entries(player).map(([key, value], index) => {
                  if (key !== "name" && key !== "num") {
                    return (
                      <View key={index} style={styles.statBox}>
                        <Text style={styles.statLabel}>{key}</Text>
                        <Text style={styles.statText}>{value}</Text>
                      </View>
                    );
                  }
                  return null;
                })}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const PlayerList = ({ players }) => {
  return (
    <View style={styles.container}>
      {players.map((player) => (
        <View key={player.id} style={styles.playerContainer}>
          <Image
            source={require("./images/placeholder-face-big.png")}
            style={styles.playerImage}
          />
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerDetails}>
              #{player.jerseyNumber} - {player.position}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const getPlayerStatValue = (key) => {
  const stat = playerStats.find((item) => Object.keys(item)[0] === key);
  return stat ? Object.values(stat)[0] : "";
};

const TeamHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("previous games");

  return (
    <View style={styles.container}>
      {/* Team name and logo */}
      <View style={styles.teamContainer}>
        <Image source={teams[0].logo} style={styles.logo} />
        <Text style={styles.teamName}>{teams[0].name}</Text>
      </View>

      {/* Horizontal navbar */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {[
          "previous games",
          "schedule",
          "Team Stats",
          "Player Stats",
          "Roster",
        ].map((category) => (
          <TouchableOpacity
            style={[
              styles.categoryBox,
              selectedCategory === category && styles.selectedCategoryBox,
            ]}
            key={category}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Display selected category */}
      <ScrollView>
        {selectedCategory === "previous games" && (
          <View style={styles.categoryContainer}>
            <Text>Previous Games</Text>
            <ScrollView contentContainerStyle={styles.previousGamesContainer}>
              {previousGames.map((game, index) => (
                <View key={index} style={styles.previousGame}>
                  <Text style={styles.previousGameOpponent}>
                    {game.opponent}
                  </Text>
                  <Text style={styles.previousGameScore}>{game.score}</Text>
                  <Text style={styles.previousGameResult}>{game.result}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
        {selectedCategory === "schedule" && (
          <View style={styles.categoryContainer}>
            <Text>Schedule</Text>
            <ScrollView contentContainerStyle={styles.previousGamesContainer}>
              {previousGames.map((game, index) => (
                <View key={index} style={styles.previousGame}>
                  <Text style={styles.previousGameOpponent}>
                    {game.opponent}
                  </Text>
                  <Text style={styles.previousGameScore}>{game.score}</Text>
                  <Text style={styles.previousGameResult}>{game.result}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
        {selectedCategory === "Team Stats" && (
          <View style={styles.container}>
            <TeamStatsTable teamStats={teamStats} />
          </View>
        )}
        {selectedCategory === "Player Stats" && (
          <View style={styles.container}>
            <PlayerStatsTable />
          </View>
        )}
        {selectedCategory === "Roster" && (
          <View style={styles.categoryContainer}>
            <PlayerList players={players} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default TeamHome;
