import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import EditButtons from '../../components/noteDetail/editButtons';
import {AppColors} from '../../theme/color';

const NoteDetail = ({route}) => {
  const [selectedStyle, setSelectedStyle] = useState(styles.normal);
  const {note} = route.params;

  const handleStyleChange = value => {
    const newStyle = styles[value] || styles.normal;
    setSelectedStyle(newStyle);
  };
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={[screenStyle.container, {flex: 1}]}>
        <EditButtons onChangeStyle={handleStyleChange} />
      </View>
      <View
        style={{
          flex: 10,
          padding: 20,
          backgroundColor: AppColors.WHITE,
        }}>
        <View
          style={{
            padding: 10,
            backgroundColor: AppColors.PRIMARY,
            borderRadius: 10,
          }}>
          {/* <Text style={{fontSize: 24, fontWeight: 'bold', marginVertical: 10}}>
            Başlık:
          </Text> */}
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              color: AppColors.WHITE,
            }}>
            {note.title}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginVertical: 10}}>
            Açıklama:
          </Text>
          <Text
            style={[
              {
                fontSize: 18,
                fontWeight: '300',
                color: AppColors.PRIMARY,
              },
              selectedStyle,
            ]}>
            {note.description}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  normal: {},
  bold: {fontWeight: 'bold'},
  italic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});
