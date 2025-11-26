import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {FutureWeatherService} from '../services/WeatherService';
import SingleDaysWeather from '../utils/SingleDaysWeather'


function FutureForecast({city /*This is in curly brackets since props takes an object*/ }){ 

    const testSquares = [{id: '1', title: 'one' }, {id: '2', title: 'two' },{id: '3', title: 'three' } ,{id: '4', title: 'four' }];
    const [weather, setWeather] = useState(null);


    useEffect(() => {
        loadWeather(); 
    }, []);

    const loadWeather = async () =>{
        let response = await FutureWeatherService(city);
        console.log(response.data);
         response.success ? setWeather(response) : console.log('An error occured!');
        };

    
      //  const days = SingleDaysWeather();
    return(
        <View style = {{flex: 1}}>
            { city ? (
                
                <View style={{flex:1, flexDirection: 'column'}}  >
                    <Text>
                        3-Day Forecasts
                    </Text>
                    <FlatList
                        horizontal //this is to make flatlist horizontal
                        data={testSquares} //data necessary for the flatlist
                        renderItem={({ item }) => ( //data from item
                        <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc',
                         height: '90%', backgroundColor: 'azure', paddingHorizontal: 35, margin: 5, borderRadius: 15}}>
                            <Text>{item.title}</Text>
                         </View>
                        )}
                        keyExtractor={(item) => item.id} //key value for the iterations
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