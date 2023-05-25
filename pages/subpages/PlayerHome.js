import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const PlayerInfoPage = () => {
  const [activeTab, setActiveTab] = useState('news');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'news':
        return <Text>News content goes here</Text>;
      case 'stats':
        return <Text>Stats content goes here</Text>;
      case 'game log':
        return <Text>Game log content goes here</Text>;
      case 'info':
        return <Text>Info content goes here</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <Image
          source={{ uri: 'https://example.com/player-image.jpg' }}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
          Player Name
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <TouchableOpacity onPress={() => handleTabChange('news')}>
          <Text style={{ fontSize: 16, fontWeight: activeTab === 'news' ? 'bold' : 'normal' }}>
            News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('stats')}>
          <Text style={{ fontSize: 16, fontWeight: activeTab === 'stats' ? 'bold' : 'normal' }}>
            Stats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('game log')}>
          <Text style={{ fontSize: 16, fontWeight: activeTab === 'game log' ? 'bold' : 'normal' }}>
            Game Log
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('info')}>
          <Text style={{ fontSize: 16, fontWeight: activeTab === 'info' ? 'bold' : 'normal' }}>
            Info
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, padding: 20 }}>
        {renderContent()}
      </View>
    </View>
  );
};

export default PlayerInfoPage;
