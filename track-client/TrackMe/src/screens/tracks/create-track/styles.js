import {StyleSheet, View, Text} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {
  primaryColor,
  white,
  black,
  pink,
  lightBlue,
} from '../../../config/typography/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  bottomContainer: {
    flex: 1,
    marginTop: verticalScale(10),
  },
});

export default styles;
