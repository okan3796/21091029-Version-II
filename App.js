// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import NeighborhoodScreen from './src/screens/NeighborhoodScreen';
import FacilityScreen from './src/screens/FacilityScreen';
import ReasonScreen from './src/screens/ReasonScreen';
import ThanksScreen from './src/screens/ThanksScreen';

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
    </NavigationContainer> );
}
  
