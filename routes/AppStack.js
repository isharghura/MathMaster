import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import PlayStack from "./PlayStack";
import Profile from "../screens/AppStack/Profile";
import Settings from "../screens/AppStack/Settings";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Play") {
            return <AntDesign name="play" size={size} color={color} />;
          } else if (route.name === "Profile") {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Settings") {
            return <AntDesign name="setting" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{ display: 'flex' }, null]
      })}
    >
      <Tab.Screen name="Play" component={PlayStack} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>

  );
}