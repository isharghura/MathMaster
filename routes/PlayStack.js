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
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="Sub" component={Sub} />
            <Stack.Screen name="Mul" component={Mul} />
            <Stack.Screen name="Div" component={Div} />
        </Stack.Navigator>
    );
};
