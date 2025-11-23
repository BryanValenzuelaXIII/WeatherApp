import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from "./components/WelcomePage";

const Stack = createStackNavigator();

function NavigationWeather(){

    return( 
        <Stack.Navigator>
            <Stack.Screen name = "WelcomePage" component = {WelcomePage} />
        </Stack.Navigator>
    );
}

export default NavigationWeather;