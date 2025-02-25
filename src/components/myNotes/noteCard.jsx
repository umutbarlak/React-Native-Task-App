import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Edit, Trash} from 'iconsax-react-native';
import {noteCardStyle} from '../../styles/noteCardStyle';
import {AppColors} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE, NOTEDETAIL} from '../../utils/router';

const NoteCard = ({item, deleteNote}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={noteCardStyle.container}
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}>
      <View style={noteCardStyle.bubleContainer}>
        <View style={noteCardStyle.buble}></View>
      </View>
      <View style={noteCardStyle.noteContainer}>
        <Text style={noteCardStyle.title}>{item.title}</Text>
        <Text style={noteCardStyle.description}>{item.description}</Text>
        <Text style={noteCardStyle.date}>{item.date}</Text>
      </View>
      <View style={noteCardStyle.btnContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ADDNOTE, {note: item, type: 'update'})
          }
          style={noteCardStyle.btnWrapper}>
          <Edit size="24" color={AppColors.PRIMARY} variant="Outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteNote} style={noteCardStyle.btnWrapper}>
          <Trash size="24" color={AppColors.RED} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;
