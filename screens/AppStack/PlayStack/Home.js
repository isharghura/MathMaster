import React from 'react';
import { Text, View, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../../styles/styles.js';
import { FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
const DeviceWidth = Dimensions.get("window").width;
export default function Home({ navigation }) {
  return (
    <View style={styles.homeMain}>
      <View style={styles.homeGrid}>
        <View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate("Addition") }} style={styles.opButton}>
              <FontAwesome name="plus" size={DeviceWidth * 0.3} color="blue" style={styles.centerize} />
              <Text style={styles.centerize}>
                Addition
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate("Multiplication") }} style={styles.opButton}>
              <AntDesign name="close" size={DeviceWidth * 0.3} color="green" style={styles.centerize} />
              <Text style={styles.centerize}>
                Multipication
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate("Subtraction") }} style={styles.opButton}>
              <FontAwesome name="minus" size={DeviceWidth * 0.3} color="red" style={styles.centerize} />
              <Text style={styles.centerize}>
                Subtraction
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate("Division") }} style={styles.opButton}>
              <FontAwesome5 name="divide" size={DeviceWidth * 0.3} color="orange" style={styles.centerize} />
              <Text style={styles.centerize}>
                Division
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}
