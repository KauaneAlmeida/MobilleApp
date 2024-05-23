import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/route/index';
import AuthContext, { AuthProvider } from './src/contexts/Auth';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
