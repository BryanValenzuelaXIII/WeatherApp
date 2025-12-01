import  React, { useEffect, useState} from "react"
import { View, StyleSheet } from "react-native"
import LinearGradient from "react-native-linear-gradient";

import FutureForecast from "../components/FutureForecast";
import WeatherGraph from '../components/WeatherGraph';
import TopInfo from '../components/TopInfo'
import TempAndIcon from '../components/TempAndIcon'
import PillInfo from '../components/PillInfo'
import {WeatherService, FutureWeatherService} from "../services/WeatherService"
import {NextTempetures} from '../utils/SingleDaysWeather'
import {WeatherComponentContext} from '../utils/WeatherComponentContext'


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

    return(
        <WeatherComponentContext.Provider value={{city, weather,puntos}} >
            <LinearGradient
                            colors={['rgba(140, 125, 207, 1)', 'rgba(214,209,230,1)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0.1, y: 1 }}   // matches ~175deg angle
                            style = {{flex: 1}}
                        >


                <View style= {styles.principal} >
                    
                    <TopInfo />

                    <View style= {styles.temp} >
                        <TempAndIcon />
                    </View>

                    <View style={styles.pill}>
                        <PillInfo />
                    </View>

                    <View style= {styles.graph} >
                        <WeatherGraph/>
                    </View>
                </View>

                <View style= {styles.future} >
                        <FutureForecast 
                            city={city}
                        /> 
                </View>

            </LinearGradient>
        </WeatherComponentContext.Provider>
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