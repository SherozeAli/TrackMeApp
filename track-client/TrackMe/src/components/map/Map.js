import React, {Component} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import styles from './styles';
class Map extends Component {
  render() {
    let points = [];
    for (let i = 0; i < 20; i++) {
      points.push({
        latitude: 40.7143 + i * 0.001,
        longitude: -74.0042 + i * 0.001,
      });
    }

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 40.7143,
            longitude: -74.0042,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          }}>
          <Polyline coordinates={points} />
        </MapView>
      </View>
    );
  }
}

export default Map;
