import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import {
  TextalignCenter,
  TextalignJustifyleft,
  TextalignJustifyright,
  TextBold,
  TextItalic,
  TextUnderline,
} from 'iconsax-react-native';

const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 2,
      value: 'italic',
      icon: <TextItalic size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 3,
      value: 'textUnderline',
      icon: <TextUnderline size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 4,
      value: 'center',
      icon: <TextalignCenter size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 5,
      value: 'left',
      icon: <TextalignJustifyleft size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 6,
      value: 'right',
      icon: <TextalignJustifyright size="32" color={AppColors.SECONDARY} />,
    },
  ];
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        },
      ]}>
      {Buttons.map(item => (
        <TouchableOpacity
          onPress={() => onChangeStyle(item.value)}
          style={{
            flex: 1,
            borderLeftColor: 'gray',
            borderLeftWidth: 0.2,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          key={item.id}>
          <Text>{item.icon}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EditButtons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.SCREENBG,
    flexDirection: 'row',
    padding: 5,
  },
});
