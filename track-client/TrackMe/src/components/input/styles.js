import {View, StyleSheet} from 'react-native';
import {primaryColor, white, black} from '../../config/typography/colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(10),
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderTopLeftRadius: moderateScale(16),
    borderBottomLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    borderWidth: 0.5,
    padding: moderateScale(5),
  },
  inputStyling: {
    color: white,
    fontFamily: 'Roboto-Regular',
    fontSize: verticalScale(17),
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: verticalScale(17),
    color: white,
  },
  iconStyling: {
    padding: moderateScale(10),
  },
});

export default styles;
