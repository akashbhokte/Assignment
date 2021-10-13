import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Offers from './src/Offers';
import linking from './src/linking';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Offers" component={Offers} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
