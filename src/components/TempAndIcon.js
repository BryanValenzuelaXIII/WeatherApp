import React, {useContext} from "react";
import {View, Text, Image} from 'react-native'
import { KelvinToFahrenheit } from "../utils/ConversionTempeture";
import { WeatherComponentContext } from "../utils/WeatherComponentContext";

function TempAndIcon(){

        const weatherIcons = {
        '01d': require('../../assets/01d.png'),
        '01n': require('../../assets/01n.png'),
        '02d': require('../../assets/02d.png'),
        '02n': require('../../assets/02d.png'),
        '03d': require('../../assets/03d.png'),
        '03n': require('../../assets/03d.png'),
        '04n': require('../../assets/04n.png'),
        '04d': require('../../assets/04n.png'),
        '10d': require('../../assets/10d.png'),
    }
        const {weather} = useContext(WeatherComponentContext);

    return(
        <View >
                    {
                    // This is for the tempature and logo 
                    }
                    { weather?.data?.main?.temp ? (
                    <View style ={{transform: [{translateY: -30} ] }} >
                        <Text style = {{color: 'midnightblue', fontSize: 130, fontWeight: '900', marginTop: 20 }}>
                            {KelvinToFahrenheit(weather.data.main.temp)}°
                        </Text> 
                        
                        <View style ={{flexDirection: 'row', transform: [{translateY: -30}]}} > 

                                <Text style = {{color: 'midnightblue', fontSize: 30, fontWeight: '900', transform: [{translateX: -15}]}}>
                                  {weather.data.weather[0].main}
                                 </Text>

                                <Image style = {{position: 'absolute', transform: [{translateX: 70}, {translateY: -75}]}}
                                     source={ weatherIcons[weather.data.weather[0].icon]}/>

                        </View>
                    </View> ) : (
                        <Text style = {{color: 'midnightblue', fontSize: 20, fontWeight: '900'}}>
                            Tempeture = - -
                        </Text> )}
    </View>
    )
}

export default TempAndIcon;