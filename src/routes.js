// In App.js in a new project

import * as React from 'react';
import { Alert, BackHandler, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Channel from './pages/Channel';
import Button from './components/Button';

const Stack = createStackNavigator();

export default function App() {

  const createButtonAlertForExit = () =>
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
    const createButtonAlertForWorning = () => 
    Alert.alert(
      "Ajuda",
      "     Se nenhum canal estiver disponível no momento ou estiver tendo problemas para assistir os canais, recomendamos que verifique sua conexão com a internet e se necessário reinicie o aplicativo."
    )
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
                <Button title="" image={require("./assets/help.png")} onPress={createButtonAlertForWorning} />
                <Button title="" image={require("./assets/exit.png")} onPress={createButtonAlertForExit} />
              </View>
            ),

            headerStyle: {
              backgroundColor: "#fff"
            },
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