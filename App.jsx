/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setTopLevelNavigator} from './src/Navigation/NavigationService';

import MyStack from './src/Navigation/ScreenNavigator';

const RootStack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef);
        }}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="MyStack" component={MyStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
