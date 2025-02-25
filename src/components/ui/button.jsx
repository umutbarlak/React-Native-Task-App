import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import {screenWidth} from '../../utils/constants';

const Button = ({type, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: AppColors.PRIMARY,
        width: screenWidth * 0.9,
        marginHorizontal: 'auto',
        marginVertical: 5,
        padding: 10,
        borderRadius: 8,
      }}>
      <Text
        style={{
          color: AppColors.WHITE,
          textAlign: 'center',
        }}>
        {type === 'update' ? 'Güncelle' : 'Kaydet'}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
