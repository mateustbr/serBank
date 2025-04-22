import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Home from '../screens/Home';
import Extrato from '../screens/Extrato';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Extrato" component={Extrato} />
    </Stack.Navigator>
  );
}
