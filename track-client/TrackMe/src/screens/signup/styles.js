import {View, StyleSheet} from 'react-native';
import {
  primaryColor,
  secondaryColor,
  white,
  black,
} from '../../config/typography/colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  innerContainer: {
    width: '100%',
    backgroundColor: secondaryColor,
    paddingVertical: verticalScale(20),
    borderTopLeftRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: verticalScale(27),
    color: white,
    textAlign: 'center',
  },
  errorText: {
    fontFamily: 'Roboto-Regular',
    fontSize: verticalScale(18),
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;
