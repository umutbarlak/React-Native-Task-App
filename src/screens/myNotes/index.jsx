import {View, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE} from '../../utils/router';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/ui/floatActionButton';
import {AppColors} from '../../theme/color';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';

const MyNotes = ({route}) => {
  const [data, setData] = useState(mockData);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.newNote) {
      setData(prevData => [route.params.newNote, ...prevData]);
    }
  }, [route.params?.newNote]);

  const deleteNote = id => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={[screenStyle.container]}>
        <Header />
        <FlatList
          style={{padding: 10}}
          data={data}
          renderItem={({item}) => (
            <NoteCard item={item} deleteNote={() => deleteNote(item.id)} />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <FloatActionButton
          onPress={() => {
            navigation.navigate(ADDNOTE, {type: 'add'});
            navigation.setOptions({});
          }}
          color={AppColors.PRIMARY}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
