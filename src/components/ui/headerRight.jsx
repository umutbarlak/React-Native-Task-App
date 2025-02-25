import {View, StyleSheet} from 'react-native';
import React from 'react';
import {FolderConnection, MoreCircle, Share} from 'iconsax-react-native';
import {AppColors} from '../../theme/color';

const HeaderRight = () => {
  return (
    <View style={styles.contianer}>
      <FolderConnection
        size="24"
        color={AppColors.SECONDARY}
        variant="Outline"
      />
      <Share size="24" color={AppColors.SECONDARY} variant="Outline" />
      <MoreCircle size="24" color={AppColors.SECONDARY} variant="Outline" />
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  contianer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
