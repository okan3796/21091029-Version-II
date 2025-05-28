// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import NeighborhoodScreen from './NeighborhoodScreen';
import FacilityScreen from './FacilityScreen';
import ReasonScreen from './ReasonScreen';
import ThanksScreen from './ThanksScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Neighborhood" component={NeighborhoodScreen} />
        <Stack.Screen name="Facility" component={FacilityScreen} />
        <Stack.Screen name="Reason" component={ReasonScreen} />
        <Stack.Screen name="Thanks" component={ThanksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
