import React, { useEffect } from 'react';
// import { View } from 'react-native';
// import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../screens/pokedex/PokedexScreen';
import PokedexProfile from '../screens/pokedex-profile/PokedexProfileScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pokedex"
      headerMode="screen"
      screenOptions={{
        headerBackTitle: null,
        headerTruncatedBackTitle: null,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        },
        headerTintColor: 'rgba(0, 0, 0, 0.54)',
        headerTitleStyle: {
          textAlign: 'center',
          marginRight: Platform.select({
            ios: 0,
            android: 53
          }),
          color: '#333333'
        }
      }}>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ title: 'Pokedex' }}
    	/>
			<Stack.Screen
        name="PokedexProfile"
        component={PokedexProfile}
        options={{ title: 'PokedexProfile' }}
    	/>
    </Stack.Navigator>
  );
};

export default AppStack;
