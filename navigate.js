import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Main from "./components/mane";
import TemperatureConverter from "./components/ConvertTemp"
import Metre from "./components/Metr"
import Angle from "./components/Angle"


const Stack = createStackNavigator();

export default function Navigate() {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                {
                    title: "Главная",
                    headerStyle: {backgroundColor: '#454546', height: 90},
                    headerTitleStyle: {fontWeight: 'light', color: 'white', textAlign: 'center'},
                }
            }
            />
            <Stack.Screen
                name="Temp"
                component={TemperatureConverter}
            />
            <Stack.Screen
                name="Metr"
                component={Metre}
            />
            <Stack.Screen
                name="Angle"
                component={Angle}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}