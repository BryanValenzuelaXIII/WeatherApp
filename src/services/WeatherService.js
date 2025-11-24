import React from "react";
import { Alert } from "react-native";

const apiKey = '3bccaaa3f8d73d58cb28195661f79e12';

async function WeatherService(city) {
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

async function FutureWeatherService(city){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

    try{
        const response = await fetch(url);
        const  json = await response.json();

        if(json.cod != 200){
            console.log("no city found");
            return {success: false};
        }

        return {success: true, data: json}
    } catch(e){
        return {success: false}
    }
}

export {WeatherService, FutureWeatherService};