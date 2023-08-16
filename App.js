import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import Jobs from './pages/Jobs/Jobs';
import Favorites from './pages/Favorites/Favorites';
import Detail from './pages/Detail/Detail';
import Basket from './pages/Basket/Basket';

import store from './context/store';

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
          <Drawer.Screen name="Jobs" component={UserStack} options={{ headerShown: false }} />
          <Drawer.Screen name="Favorites" component={Favorites} />
          <Drawer.Screen name="Basket" component={Basket} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
