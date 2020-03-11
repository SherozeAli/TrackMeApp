import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Got to track details"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

export default TrackListScreen;
