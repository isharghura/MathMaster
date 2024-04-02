import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from '../../routes/AuthProvider';
import { styles } from '../../styles/styles.js';

export default function Profile({ navigation }) {
  const { userName, lvl, addScore, subScore, mulScore, divScore, netScore } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>The current level of difficulty is {lvl}.</Text>
      <Text>Your score in addition is {addScore}.</Text>
      <Text>Your score in subtraction is {subScore}.</Text>
      <Text>Your score in multiplication is {mulScore}.</Text>
      <Text>Your score in division is {divScore}.</Text>
      <Text>Your total score is {netScore}.</Text>
    </View>
  );
}
