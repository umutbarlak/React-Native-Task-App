import {View, Text, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/color';
import Button from '../../components/ui/button';
import {useNavigation} from '@react-navigation/native';
import {MYNOTES} from '../../utils/router';

const AddNote = ({route}) => {
  const navigation = useNavigation();
  const {note, type} = route?.params;

  const [title, setTitle] = useState(note?.title);
  const [desc, setDesc] = useState(note?.description);
  const [titleReq, setTitleReq] = useState(false);
  const [descReq, setDescReq] = useState(false);

  const handleSubmit = () => {
    if (title) setTitleReq(false);
    if (desc) setDescReq(false);
    if (!title) return setTitleReq(true);
    if (!desc) return setDescReq(true);

    const newNote = {
      id: Math.random() * 1000,
      title: title,
      description: desc,
      date: new Date().toLocaleDateString(),
    };

    navigation.navigate(MYNOTES, {newNote});
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={{padding: 10, flex: 1}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
          Başlık
        </Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Lütfen başlığınızı bu alana giriniz"
          style={{
            backgroundColor: AppColors.WHITE,
            borderWidth: 1,
            borderColor: AppColors.GRAY,
            padding: 5,
            margin: 8,
            borderRadius: 8,
            height: 50,
            fontSize: 16,
          }}
        />
        {titleReq && (
          <Text style={{fontWeight: '500', fontSize: 16, color: AppColors.RED}}>
            Lütfen başlık alanını doldurunuz !
          </Text>
        )}
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Açıklama</Text>
        <TextInput
          value={desc}
          onChangeText={setDesc}
          multiline
          numberOfLines={4}
          hitSlop={2}
          minHeight={100}
          maxHeight={180}
          placeholder="Lütfen notunuzu bu alana yazınız"
          style={{
            backgroundColor: AppColors.WHITE,
            borderWidth: 1,
            borderColor: AppColors.GRAY,
            padding: 5,
            margin: 8,
            borderRadius: 8,
            fontSize: 16,
            marginTop: 10,
          }}
        />
        {descReq && (
          <Text style={{fontWeight: '500', fontSize: 16, color: AppColors.RED}}>
            Lütfen başlık alanını doldurunuz !
          </Text>
        )}
      </View>
      <Button onPress={handleSubmit} type={type} />
    </SafeAreaView>
  );
};

export default AddNote;
