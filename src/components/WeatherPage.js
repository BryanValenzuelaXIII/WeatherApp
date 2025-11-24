import {React, useEffect, useState} from "react"
import { View, Text, Alert, Image, TouchableOpacity } from "react-native"

import LinearGradient from "react-native-linear-gradient";
import {WeatherService} from "../services/WeatherService"
import {KelvinToFahrenheit} from "../services/ConversionTempeture"


function WeatherPage(){

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Atlanta');

     useEffect(() => {
        loadWeather(); 
    }, []);

    const loadWeather = async () =>{
        let weather = await WeatherService(city);
        console.log(weather.success);
         weather.success ? setWeather(weather) : console.log('An error occured!');
        };
    
    const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const todayDate = new Date();
    

    return(
        <LinearGradient
                        colors={['rgba(143,128,209,1)', 'rgba(214,209,230,1)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.1, y: 1 }}   // matches ~175deg angle
                        style = {{flex: 1}}
                    >

            <View style= {{flex: 8, backgroundColor: 'white', opacity: 0.8, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}} >
                <View style= {{flex: 1, opacity: 0.8, alignItems: 'center', paddingTop: 20}} >
                    {/* This is for the location, and date */}
                    <View style = {{ flexDirection: 'row'}}>
                        <Image source={require('../../assets/location1.png')} />
                    
                        <Text style = {{fontSize: 25, fontWeight: 700}}>
                        {city || "Location"}
                        </Text>
                        
                    </View>

                    <View style = {{backgroundColor: 'red'}}>
                            <TouchableOpacity>
                                <Text>
                                    boton de lupa
                                </Text>
                            </TouchableOpacity>
                        </View>

                    <Text style = {{fontSize: 15, fontWeight: 500, opacity: 0.7, marginTop: 5}}>
                        {weekDay[todayDate.getDay()]} {months[todayDate.getMonth()]} {todayDate.getFullYear()}
                    </Text>

                </View>


                <View style= {{flex: 2, alignItems: 'center', justifyContent: 'center'}} >
                    {/* This is for the tempature and logo */}
                    { weather?.data?.main?.temp ? (
                    <View style ={{transform: [{translateY: -40} ] }} >
                        <Text style = {{color: 'midnightblue', fontSize: 100, fontWeight: '900' }}>
                            {KelvinToFahrenheit(weather.data.main.temp)}°
                        </Text> 
                        <Text style = {{color: 'midnightblue', fontSize: 20, fontWeight: '900'}}>
                            {weather.data.weather[0].main}
                        </Text>
                    </View> ) : (
                        <Text style = {{color: 'midnightblue', fontSize: 20, fontWeight: '900'}}>
                            Tempeture = - -
                        </Text> )}
                </View>


                <View style= {{flex: 1, opacity: 0.9, alignItems: 'center', justifyContent: 'center'}} >
                    {/* This is for extra info */}
                    <View style = { {flexDirection: 'row', flex: 1, backgroundColor: 'white', justifyContent: 'space-around',
                        borderRadius: 50, width: '90%'
                    } }> 
                    { weather?.data?.main?.temp ? (
                        <><Text style={{ textAlign: 'center', fontSize: 20, flex: 1 }}>
                                Humidity {"\n" + weather.data.main.humidity}
                            </Text><Text style={{ textAlign: 'center', fontSize: 20, flex: 1 }}>
                                    Wind {"\n" + weather.data.wind.speed}
                                </Text><Text style={{ textAlign: 'center', fontSize: 20, flex: 1 }}>
                                    Possibility of {"\n"}
                                    rain
                                </Text></>) :(
                        <Text>
                            No information 
                        </Text>
                        )
                    }
                    </View>
                </View>


                <View style= {{flex: 1, backgroundColor: 'green', opacity: 0.1}} >
                    {/* This is for a graph of tempeture*/}
                </View>
            </View>

            <View style= {{flex: 3}} >

            </View>

        </LinearGradient>
    )
}

export default WeatherPage