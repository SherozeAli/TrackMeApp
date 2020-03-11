import {View, StyleSheet} from 'react-native';
import {
  primaryColor,
  white,
  black,
  lightBlue,
} from '../../config/typography/colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(10),
  },

  buttonContainer: {
    marginTop: moderateScale(10),
    padding: moderateScale(13),
    backgroundColor: lightBlue,
    borderRadius: moderateScale(25),
    shadowColor: white,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  buttonText: {
    textAlign: 'center',
    color: white,
    fontFamily: 'Roboto-Regular',
    fontSize: verticalScale(16),
    fontStyle: 'normal',
  },
});
export default styles;
