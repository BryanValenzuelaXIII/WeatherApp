import React from "react";
import { Alert } from "react-native";

async function WeatherService(city) {
    const apiKey = '3bccaaa3f8d73d58cb28195661f79e12';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try{
        const response = await fetch(url);
        const json = await response.json();

        if(!response.ok){
            Alert.alert("No city found by that name!");
            return {success: false}
        }

        return {success: true, data: json};
    } catch(e){
        Alert.alert("No city found by that name!");
        return {success: false}
    }
}

export {WeatherService};