import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/AppStack/PlayStack/Home.js';
import Add from '../screens/AppStack/PlayStack/Add.js';
import Sub from '../screens/AppStack/PlayStack/Sub.js';
import Mul from '../screens/AppStack/PlayStack/Mul.js';
import Div from '../screens/AppStack/PlayStack/Div.js';
const Stack = createStackNavigator();
export default function PlayStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Addition" component={Add} />
            <Stack.Screen name="Subtraction" component={Sub} />
            <Stack.Screen name="Multiplication" component={Mul} />
            <Stack.Screen name="Division" component={Div} />
        </Stack.Navigator>
    );
};
