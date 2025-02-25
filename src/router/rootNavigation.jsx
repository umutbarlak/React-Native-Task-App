import AddNote from '../screens/addNote';
import MyNotes from '../screens/myNotes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/router';
import NoteDetail from '../screens/noteDetail';
import {Text} from 'react-native';
import HeaderRight from '../components/ui/headerRight';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        name={ADDNOTE}
        component={AddNote}
        options={{
          headerRight: () => <HeaderRight />,
          headerTitle: '',
        }}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
