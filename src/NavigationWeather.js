import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import WeatherPage from './components/WeatherPage'

import WelcomePage from "./components/WelcomePage";
import { TouchableOpacity } from "react-native";
import { Screen } from "react-native-screens";

const Stack = createStackNavigator();

function NavigationWeather(){

    return( 
        <Stack.Navigator>
            <Stack.Screen name = "WelcomePage" component = {WelcomePage} />
            <Stack.Screen name = "WeatherPage" component = {WeatherPage} />
        </Stack.Navigator>
    );
}

export default NavigationWeather;