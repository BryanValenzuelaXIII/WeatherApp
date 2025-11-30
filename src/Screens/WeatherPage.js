import  React, { useEffect, useState} from "react"
import { View, Text, Alert, Image, TouchableOpacity } from "react-native"

import FutureForecast from "../components/FutureForecast";

import LinearGradient from "react-native-linear-gradient";
import {WeatherService, FutureWeatherService} from "../services/WeatherService"
import {KelvinToFahrenheit} from "../utils/ConversionTempeture"
import {MultiDayWeather, NextTempetures} from '../utils/SingleDaysWeather'
import WeatherGraph from '../components/WeatherGraph';


function WeatherPage(){

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Atlanta');
    const [puntos, setPuntos] = useState([]);

     useEffect(() => {
        loadWeather(); 
    }, []);

    const loadWeather = async () =>{
        let weather = await WeatherService(city);
        let respondido = await FutureWeatherService(city);

        if(respondido.success){
            const reportado = NextTempetures({ data: respondido.data });
            setPuntos(reportado);
        }

        console.log(weather.data.weather[0].icon);
        //console.log(weather.data);
         weather.success ? setWeather(weather) : console.log('An error occured!');
        };
    
    const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
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

    const todayDate = new Date();
    

    return(
        <LinearGradient
                        colors={['rgba(140, 125, 207, 1)', 'rgba(214,209,230,1)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.1, y: 1 }}   // matches ~175deg angle
                        style = {{flex: 1}}
                    >


            <View style= {{flex: 8, backgroundColor: 'darkgray', opacity: 0.8, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}} >
                <View style= {{flex: 1, opacity: 0.8, alignItems: 'center', paddingTop: 20 }} >
                    {/* This is for the location, and date */}
                    <View style = {{ flexDirection: 'row', alignContent: 'space-between', flex: 1}}>
                       { <View style = {{ flex: 1}} >
                            {/* <Text>
                                a
                            </Text> */}
                        </View>  }
                        <View style = {{ flexDirection: 'row', alignItems: 'flex-end', flex: 1}} >
                             <Image source={require('../../assets/location1.png')} />                    
                            <Text style = {{fontSize: 25, fontWeight: 700}}>
                                {city || "Location"}
                             </Text>
                        </View>
                        
                        <View style = {{flexDirection: 'row-reverse',alignItems:'flex-end', flex: 1, paddingRight: 20}}>
                            { <TouchableOpacity >
                                <Image source={require('../../assets/icons8-search-30.png')}/>
                            </TouchableOpacity>}
                        </View>
                            
                    </View>


                    <Text style = {{fontSize: 15, fontWeight: 500, opacity: 0.7, marginBottom: 20, paddingTop: 10 }}>
                        {weekDay[todayDate.getDay()]} {months[todayDate.getMonth()]} {todayDate.getFullYear()}
                    </Text>

                </View>


                <View style= {{flex: 2, alignItems: 'center', justifyContent: 'center', }} >
                    {/* This is for the tempature and logo */}
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


                <View style= {{flex: 1, opacity: 0.9, alignItems: 'center', justifyContent: 'center', }} >
                    {/* This is for extra info */}
                    <View style = { {flex: 1, backgroundColor: 'white', justifyContent: 'space-around',
                        borderRadius: 50, marginBottom: 10, width: '90%'
                    } }> 
                    { weather?.data?.main?.temp ? (
                            <View style = {{flex: 1, flexDirection: 'row',  justifyContent: 'space-around', marginTop: 10} }>
                                <View style = {{alignItems: 'center'}}>
                                    <Image source={require('../../assets/icons8-humidity-30.png')} 

                                    ></Image>  
                                    <Text style={{ textAlign: 'center', fontSize: 18, flex: 1 }}>
                                        Humidity {"\n" + weather.data.main.humidity}
                                    </Text>
                                </View>

                                <View style = {{alignItems: 'center'}}>
                                    <Image source={require('../../assets/icons8-wind-30.png')} 

                                    ></Image>  
                                    <Text style={{ textAlign: 'center', fontSize: 18, flex: 1 }}>
                                        Wind {"\n" + weather.data.wind.speed} Km/hr
                                    </Text>
                                </View >


                                <View style = {{alignItems: 'center'}}>
                                    <Image source={require('../../assets/icons8-visibility-30.png')} 

                                    ></Image>  

                                    <Text style={{ textAlign: 'center', fontSize: 18, flex: 1 }}>
                                        Visibility {"\n" + (weather.data.visibility/100) + "%"}
                                    </Text>

                                </View>
                            </View>) :(
                        <Text>
                            No information 
                        </Text>
                        )
                    }
                    </View>
                </View>


                <View style= {{flex: 2, /*backgroundColor: 'green',*/ }} >
                    <WeatherGraph 
                        points = {puntos} 
                    />
                </View>
            </View>

            <View style= {{flex: 3}} >
                    <FutureForecast 
                        city={city}
                    /> 
            </View>

        </LinearGradient>
    )
}

export default WeatherPage