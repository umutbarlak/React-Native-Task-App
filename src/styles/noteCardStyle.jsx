import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/color';
import {screenHeight, screenWidth} from '../utils/constants';

const noteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: AppColors.WHITE,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#0001',
    shadowOffset: {
      width: 0.1,
      height: 0.1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    minHeight: screenHeight * 0.1,
  },
  bubleContainer: {
    flex: 1,
  },
  buble: {
    height: screenWidth * 0.03,
    width: screenWidth * 0.03,
    backgroundColor: AppColors.GRAY,
    borderRadius: 50,
  },
  noteContainer: {
    flex: 10,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnWrapper: {},
  title: {
    fontSize: 16,
    color: AppColors.SECONDARY,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  description: {fontSize: 14, color: AppColors.GRAY, marginVertical: 5},
  date: {fontSize: 14, color: AppColors.GRAY, marginVertical: 5},
});

export {noteCardStyle};
