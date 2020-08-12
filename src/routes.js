// In App.js in a new project

import * as React from 'react';
import { Alert, BackHandler, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Channel from './pages/Channel';
import Button from './components/Button';
import styles from './pages/Home/styles';

const Stack = createStackNavigator();

export default function App() {

  const createButtonAlert = () =>
    Alert.alert(
      "Sair",
      "Realmente deseja sair?",
      [
        {
          text: "Sim",
          onPress: () => BackHandler.exitApp()
        },
        {
          text: "Não",
          onPress: () => console.log("Not exit app.")
        },
      ],
      { cancelable: false }
    );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            title: "Bem-vindo à Tv On",
            headerTitleStyle: {
              fontSize: 20
            },
            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 10}}>
                <Button title="" image={require("./assets/search.png")} onPress={() => console.log('Search list')} />
                <Button title="" image={require("./assets/exit.png")} onPress={createButtonAlert} />
              </View>
            ),

            headerStyle: {
              //backgroundColor: '#FFA500'
              backgroundColor: "#fff"
            },
            //headerTintColor: '#ffc04c',
            headerTintColor: "#FFA500",
            headerTitleStyle: {
              fontSize: 23,
              fontWeight: '900'
            }

          }}
        />
        <Stack.Screen name="Channel" component={Channel} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
