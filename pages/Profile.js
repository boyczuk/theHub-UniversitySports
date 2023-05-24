import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../pages/subpages/images/placeholder-face-big.png')}
        style={styles.profilePicture}
      />

      <Text style={styles.name}>Owen Rocchi</Text>
      <Text style={styles.username}>@OwenRocchi</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Posts</Text>
          <Text style={styles.detailValue}>150</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Followers</Text>
          <Text style={styles.detailValue}>2.5K</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Following</Text>
          <Text style={styles.detailValue}>500</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
  },
});

export default ProfileScreen;
