import React from 'react'
import Inicio from './src/views/Inicio'
import NuevoCliente from './src/views/NuevoCliente'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { DetallesCliente } from './src/views/DetallesCliente'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Inicio'
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary
          },
          headerTintColor: theme.colors.surface
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: "Inicio" }} />

        <Stack.Screen name="NuevoCliente" options={{ title: "Nuevo Alumno" }} component={NuevoCliente} />
        <Stack.Screen name="DetallesCliente" options={{ title: "Detalles de Alumno" }} component={DetallesCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
