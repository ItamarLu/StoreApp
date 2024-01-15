import React from 'react'
import MainScreen from '../screens/MainScreen'
import CartScreen from '../screens/CartScreen'
import PayScreen from '../screens/PayScreen'
import SentScreen from '../screens/SentScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ScreensTabs = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PayScreen"
        component={PayScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SentScreen"
        component={SentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default ScreensTabs
