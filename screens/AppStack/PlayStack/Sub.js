import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from '../../../styles/styles.js'
import { AuthContext } from '../../../routes/AuthProvider';

export default function Sub({ navigation }) {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [ansI, setansI] = useState("");
  const { lvl, subScore, setsubScore, setnetScore, netScore } = useContext(AuthContext);

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
    if (num1 < num2) {
      if (num2 - num1 == ansI) {
        if (lvl === 0) {
          setsubScore(subScore + 10);
          setnetScore(netScore + 10);
        } else if (lvl === 1) {
          setsubScore(subScore + 50);
          setnetScore(netScore + 50);
        } else {
          setsubScore(subScore + 100);
          setnetScore(netScore + 100);
        }
      } else {
        alert("Your answer is wrong.");
        if (lvl === 0) {
          setsubScore(subScore - 5);
          setnetScore(netScore + 5);
        } else if (lvl === 1) {
          setsubScore(subScore - 25);
          setnetScore(netScore + 25);
        } else {
          setsubScore(subScore - 50);
          setnetScore(netScore + 50);
        }
      }
    } else {
      if (num1 - num2 == ansI) {
        if (lvl === 0) {
          setsubScore(subScore + 10);
          setnetScore(netScore + 10);
        } else if (lvl === 1) {
          setsubScore(subScore + 50);
          setnetScore(netScore + 50);
        } else {
          setsubScore(subScore + 100);
          setnetScore(netScore + 100);
        }
      } else {
        alert("Your answer is wrong.");
        if (lvl === 0) {
          setsubScore(subScore - 5);
          setnetScore(netScore + 5);
        } else if (lvl === 1) {
          setsubScore(subScore - 25);
          setnetScore(netScore + 25);
        } else {
          setsubScore(subScore - 50);
          setnetScore(netScore + 50);
        }
      }
    }
    gen_problem();
  }
  useEffect(() => { gen_problem(); }, []);

  return (
    <View style={styles.container}>
      <Text>This is subtraction.</Text>
      <Text>Your score is {subScore}</Text>
      {num1 < num2 ? (
        <Text>
          {num2} - {num1}
        </Text>
      ) : (
        <Text>
          {num1} - {num2}
        </Text>
      )}
      <TextInput value={ansI.toString()} placeholder="Answer:" keyboardType="numeric" onChangeText={(a) => { setansI(a); }} />
      <Button title="Check Answer" onPress={() => { check_ans(); }} />
    </View>
  );
}