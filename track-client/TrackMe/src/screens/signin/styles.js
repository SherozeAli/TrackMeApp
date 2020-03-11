import {View, StyleSheet} from 'react-native';
import {primaryColor, white, black} from '../../config/typography/colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  innerContainer: {},
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: verticalScale(17),
    color: white,
  },
});

export default styles;
