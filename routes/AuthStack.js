import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from '../screens/AuthStack/SignIn.js';
import SignUp from '../screens/AuthStack/SignUp.js';

const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};
