import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

const TrackDetailScreen = ({navigation}) => {
  return (
    <View>
      <Text>TrackDetailScreen</Text>
      <Button
        title="Got to track LIST"
        onPress={() => navigation.navigate('TrackList')}
      />
    </View>
  );
};

export default TrackDetailScreen;
