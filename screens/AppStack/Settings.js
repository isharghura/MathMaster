import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from '../../routes/AuthProvider.js';
import { styles } from '../../styles/styles.js';

export default function Settings({ navigation }) {
  const { userName, setlvl, lvl } = useContext(AuthContext);
  function setDifficulty(diff) {
    setlvl(diff);
  }
  return (
    <View style={styles.container}>
      <Text>Difficulty level is: {lvl+1}</Text>
      <Button title='Easy' onPress={() => { setDifficulty(0); }} />
      <Button title='Medium' onPress={() => { setDifficulty(1); }} />
      <Button title='Hard' onPress={() => { setDifficulty(2); }} />
    </View>
  );
}