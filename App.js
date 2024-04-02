import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './routes/AuthProvider';
import AppStack from './routes/AppStack';

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
