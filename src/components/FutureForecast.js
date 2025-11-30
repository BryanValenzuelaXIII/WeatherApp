import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, FlatList, Alert, Image} from 'react-native';
import {FutureWeatherService} from '../services/WeatherService';
import {MultiDayWeather, NextTempetures} from '../utils/SingleDaysWeather'
import WeatherGraph from './WeatherGraph';



function FutureForecast({city /*This is in curly brackets since props takes an object*/ }){ 

    const [weather, setWeather] = useState(null);
    const [days, setDays] = useState([]); 


    useEffect(() => {
        loadWeather(); 
    }, []);

    const loadWeather = async () =>{
        try{
            let response = await FutureWeatherService(city);
            console.log(response);

            if(response.success == true){
                //console.log(response);
                setWeather(response.data);
                //console.log(weather);
                //console.log('the following is the response');
                //console.log(weather); 
                daysReport = MultiDayWeather({ data: response.data });
                setDays(daysReport);

                //console.log(days);
                //console.log(days[0].data);

                /*This Is not going to be updated!! ask trainer*/

            } else {
                 Alert.alert('An error occured!');
                }
        } catch(e){
            Alert.alert('Error getting the response \n' + e);
        }
    }

    
        
    return(
        <View style = {{flex: 1}}>
            { weather ? (
                
                <View style={{flex:1, flexDirection: 'column'}}  >
                    <Text style = {{fontSize: 15, color: 'midnightblue', fontWeight: '700'}} >
                        4-Day Forecasts 
                    </Text>

                    
                    <FlatList
                        horizontal //this is to make flatlist horizontal
                        data={days} //data necessary for the flatlist

                        renderItem={({ item }) => ( //data from item
                        <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc',
                         height: '90%', backgroundColor: 'darkgray', paddingHorizontal: 10, margin: 5, borderRadius: 15,}}>
                            <Text
                                style = {{fontSize: 15, color: 'midnightblue', fontWeight: '700'}}
                            >{item.day }</Text>

                            <Image 
                                source={require('../../assets/smallIcons/01d.png')}
                            />

                            <Text  style = {{fontSize: 15, color: 'midnightblue', fontWeight: '700'}} >
                                {"Max " + item.max_temp + " / \n" + item.min_temp + " Min"}
                            </Text>
                         </View>
                        )}
                        keyExtractor={(item) => item.day} //key value for the iterations
                        />

                </View>
            ) : (
                        <Text>
                            Please select a city
                        </Text>
            )
            }
        </View>
    )
}

export default FutureForecast;