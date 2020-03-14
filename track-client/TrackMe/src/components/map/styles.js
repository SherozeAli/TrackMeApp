import {StyleSheet, View, Text} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
    marginTop: verticalScale(10),
  },
});

export default styles;
