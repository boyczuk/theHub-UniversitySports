import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingScreen = () => {
  const [notificationEnabled, setNotificationEnabled] = React.useState(false);

  const toggleNotification = () => {
    setNotificationEnabled((prevValue) => !prevValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Notification</Text>
        <Switch
          value={notificationEnabled}
          onValueChange={toggleNotification}
          thumbColor={notificationEnabled ? '#007AFF' : '#ccc'}
          trackColor={{ true: '#007AFF', false: '#ccc' }}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          value={false}
          disabled={true}
          thumbColor="#ccc"
          trackColor={{ true: '#007AFF', false: '#ccc' }}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Language</Text>
        <Text style={styles.value}>English</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default SettingScreen;
