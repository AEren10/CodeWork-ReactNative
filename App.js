import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Jobs from './pages/Jobs/Jobs';
import Favorites from './pages/Favorites/Favorites'
import Detail from './pages/Detail/Detail';

import store from './context/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function UserStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Jobs" component={Jobs} />
          <Stack.Screen name="Details" component={Detail} />
      </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Drawer.Navigator>   
              <Drawer.Screen name="Jobs" component={UserStack} options={{headerShown:false}} />
              <Drawer.Screen name="Favorites" component={Favorites} /> 
          </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;