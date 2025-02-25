import {View, Text} from 'react-native';
import React from 'react';
import {MYNOTES} from '../../utils/router';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/color';
import {HambergerMenu, More, SearchNormal1} from 'iconsax-react-native';

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 5,
        borderBottomColor: '#c3c3c3',
        borderBottomWidth: 3,
      }}>
      <View
        style={{
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 32,
            color: AppColors.SECONDARY,
            textAlign: 'center',
          }}>
          {MYNOTES}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <View style={{padding: 5}}>
          <HambergerMenu size="24" color={AppColors.SECONDARY} />
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <SearchNormal1 size="24" color={AppColors.SECONDARY} />
          <More size="24" color={AppColors.SECONDARY} />
        </View>
      </View>
    </View>
  );
};

export default Header;
