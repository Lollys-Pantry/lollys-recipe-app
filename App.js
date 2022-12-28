import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Recipes from './screens/recipes';
import Recipe from './screens/recipe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lolly's Recipes">
        <Stack.Screen name="Lolly's Recipes" component={Recipes} />
        <Stack.Screen name="Recipe Details" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
