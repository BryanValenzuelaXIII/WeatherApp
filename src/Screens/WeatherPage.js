import  React, { useEffect, useState} from "react"
import { View, Text, Alert, Image, TouchableOpacity, StyleSheet } from "react-native"
import LinearGradient from "react-native-linear-gradient";

import FutureForecast from "../components/FutureForecast";
import WeatherGraph from '../components/WeatherGraph';
import TopInfo from '../components/TopInfo'
import TempAndIcon from '../components/TempAndIcon'
import PillInfo from '../components/PillInfo'
import {WeatherService, FutureWeatherService} from "../services/WeatherService"
import {KelvinToFahrenheit} from "../utils/ConversionTempeture"
import {MultiDayWeather, NextTempetures} from '../utils/SingleDaysWeather'


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


            <View style= {styles.principal} >
                
                <TopInfo 
                    city = {city}
                />
                <View style= {styles.temp} >
                    <TempAndIcon 
                        weather={weather}
                    />
                </View>
                <View style={styles.pill}>
                    <PillInfo weather={weather} />
                </View>

                <View style= {styles.graph} >
                    <WeatherGraph 
                        points = {puntos} 
                    />
                </View>
            </View>

            <View style= {styles.future} >
                    <FutureForecast 
                        city={city}
                    /> 
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  principal: {
    flex: 8,
    backgroundColor: 'darkgray',
    opacity: 0.8,
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25
  },
  temp: {
    flex: 2, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  pill:{ 
    flex: 1, 
    opacity: 0.9, 
    alignItems: "center", 
    justifyContent: "center", 
  },
  graph:{
    flex: 2
  },
  future:{
    flex: 3
  }
});

export default WeatherPage