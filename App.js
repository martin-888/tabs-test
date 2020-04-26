import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function Screen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
      <View style={{ flex: 1, backgroundColor: 'lightgreen' }}>
        <Text>Some content</Text>
      </View>
    </SafeAreaView>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator barStyle={{ backgroundColor: 'gold' }}>
          <Tab.Screen name="Swipe" component={Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
