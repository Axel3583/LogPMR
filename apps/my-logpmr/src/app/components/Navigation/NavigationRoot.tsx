import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { TabContextProvider } from "../context/TabContext";

const Stack = createNativeStackNavigator();

export  function MainNavigator(){
    return(
        <TabContextProvider>
            <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Root"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="Root" component={TabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
        </TabContextProvider>
    )
}