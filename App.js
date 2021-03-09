/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyNavigationRef } from './src/lib/navigation';
import RootNavigator from './src/routes/AppStack';
import configureStore from './src/redux/store/configureStore';
import { getInitialPokemons } from './src/redux/actions/pokedexAction';

const { store } = configureStore();
store.dispatch(getInitialPokemons());
// console.log('store', store);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyNavigationRef.current = true;
          }}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
