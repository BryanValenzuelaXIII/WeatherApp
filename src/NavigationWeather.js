import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import WeatherPage from './Screens/WeatherPage'
import WelcomePage from "./Screens/WelcomePage";
import Login from './Screens/Login'


const Stack = createStackNavigator();

function NavigationWeather(){

    return( 
        <Stack.Navigator>
            <Stack.Screen name = "Welcome Page" component = {WelcomePage} />
            <Stack.Screen name = "WeatherPage" component = {WeatherPage} />
            <Stack.Screen name = "Login" component = {Login} />
        </Stack.Navigator>
    );
}

export default NavigationWeather;