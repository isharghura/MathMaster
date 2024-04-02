import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from '../../../styles/styles.js'
import { AuthContext } from '../../../routes/AuthProvider.js';

export default function Add({ navigation }) {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [ansI, setansI] = useState("");
  const { lvl, addScore, setaddScore, setnetScore, netScore } = useContext(AuthContext);

  function gen_problem() {
    if (lvl === 0) {
      setNum1(Math.floor((Math.random() * (10 - 0)) + 0));
      setNum2(Math.floor((Math.random() * (10 - 0)) + 0));
    }
    else if (lvl === 1) {
      setNum1(Math.floor((Math.random() * (100 - 10)) + 10));
      setNum2(Math.floor((Math.random() * (100 - 10)) + 10));
    }
    else {
      setNum1(Math.floor((Math.random() * (1000 - 100)) + 100));
      setNum2(Math.floor((Math.random() * (1000 - 100)) + 100));
    }
    setansI("");
  }

  function check_ans() {
    console.log(ansI);
    if ((num1 + num2) == ansI) {

      if (lvl === 0) {
        setaddScore(addScore + 10);
        setnetScore(netScore + 10);
      } else if (lvl === 1) {
        setaddScore(addScore + 50);
        setnetScore(netScore + 50);
      } else {
        setaddScore(addScore + 100);
        setnetScore(netScore + 100);
      }
    }
    else {
      alert("Your answer is wrong.")
      if (lvl === 0) {
        setaddScore(addScore - 5);
        setnetScore(netScore - 5);
      } else if (lvl === 1) {
        setaddScore(addScore - 25);
        setnetScore(netScore - 25);
      } else {
        setaddScore(addScore - 50);
        setnetScore(netScore - 50);
      }
    }
    gen_problem();
  }
  useEffect(() => { gen_problem(); }, []);

  return (
    <View style={styles.container}>
      <Text>This is addition.</Text>
      <Text>Your score is {addScore}</Text>
      <Text>{num1} + {num2}</Text>
      <TextInput value={ansI.toString()} placeholder="Answer:" keyboardType="numeric" onChangeText={(a) => { setansI(a); }} />
      <Button title="Check Answer" onPress={() => { check_ans(); }} />
    </View>
  );
}