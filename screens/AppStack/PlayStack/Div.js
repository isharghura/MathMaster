import React, { useState, useEffect, useContext } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { styles } from "../../../styles/styles.js";
import { AuthContext } from '../../../routes/AuthProvider';

export default function Div({ navigation }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [ansQuo, setansQuo] = useState("");
  const [rem, setrem] = useState("");
  const { lvl, divScore, setdivScore, setnetScore, netScore } = useContext(AuthContext);

  function gen_problem() {
    setansQuo("");
    setrem("");
    if (lvl === 0) {
      setNum1(Math.floor(Math.random() * (10 - 1) + 1));
      setNum2(Math.floor(Math.random() * (10 - 1) + 1));
    } else if (lvl === 1) {
      setNum1(Math.floor(Math.random() * (100 - 50) + 50));
      setNum2(Math.floor(Math.random() * (20 - 1) + 1));
    } else {
      setNum1(Math.floor(Math.random() * (1000 - 100) + 100));
      setNum2(Math.floor(Math.random() * (50 - 1) + 1));
    }
  }

  function check_ans() {
    if (num1 < num2) {
      if (Math.floor(num2 / num1) == ansQuo) {
        if (num2 % num1 == rem) {
          if (lvl === 0) {
            setdivScore(divScore + 20);
            setnetScore(netScore + 20);
          } else if (lvl === 1) {
            setdivScore(divScore + 100);
            setnetScore(netScore + 100);
          } else {
            setdivScore(divScore + 200);
            setnetScore(netScore + 200);
          }
        } else {
          alert("Your remainder is wrong.");
          if (lvl === 0) {
            setdivScore(divScore + 10);
            setnetScore(netScore + 10);
          } else if (lvl === 1) {
            setdivScore(divScore + 50);
            setnetScore(netScore + 50);
          } else {
            setdivScore(divScore + 100);
            setnetScore(netScore + 100);
          }
        }
      } else {
        alert("Your answer is wrong.");
        if (lvl === 0) {
          setdivScore(divScore - 10);
          setnetScore(netScore + 10);
        } else if (lvl === 1) {
          setdivScore(divScore - 50);
          setnetScore(netScore + 50);
        } else {
          setdivScore(divScore - 100);
          setnetScore(netScore + 100);
        }
      }
    } else {
      if (Math.floor(num1 / num2) == ansQuo) {
        if (num1 % num2 == rem) {
          if (lvl === 0) {
            setdivScore(divScore + 20);
            setnetScore(netScore + 20);
          } else if (lvl === 1) {
            setdivScore(divScore + 100);
            setnetScore(netScore + 100);
          } else {
            setdivScore(divScore + 200);
            setnetScore(netScore + 200);
          }
        } else {
          alert("Your remainder is wrong.");
          if (lvl === 0) {
            setdivScore(divScore + 10);
            setnetScore(netScore + 10);
          } else if (lvl === 1) {
            setdivScore(divScore + 50);
            setnetScore(netScore + 50);
          } else {
            setdivScore(divScore + 100);
            setnetScore(netScore + 100);
          }
        }
      } else {
        alert("Your answer is wrong.");
        if (lvl === 0) {
          setdivScore(divScore - 10);
          setnetScore(netScore + 10);
        } else if (lvl === 1) {
          setdivScore(divScore - 50);
          setnetScore(netScore + 50);
        } else {
          setdivScore(divScore - 100);
          setnetScore(netScore + 100);
        }
      }
    }
    gen_problem();
  }

  useEffect(() => {
    gen_problem();
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is division.</Text>
      <Text>Your score is {divScore}</Text>
      {num1 < num2 ? (
        <Text>
          {num2} / {num1}
        </Text>
      ) : (
        <Text>
          {num1} / {num2}
        </Text>
      )}
      <TextInput value={ansQuo.toString()} placeholder="Quotient:" keyboardType="numeric" onChangeText={(a) => { setansQuo(a); }} />
      <TextInput value={rem.toString()} placeholder="Remainder:" keyboardType="numeric" onChangeText={(a) => { setrem(a); }} />
      <Button
        title="Check Answer"
        onPress={() => {
          check_ans();
        }}
      />
    </View>
  );
}