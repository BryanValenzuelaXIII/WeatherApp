import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import { useContext } from "react";
import { WeatherComponentContext } from "../utils/WeatherComponentContext";

function TopInfo(){

    
    const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const todayDate = new Date();

    const {city} = useContext(WeatherComponentContext);
    const [ref, setRef] = useState(0);

    return(
        <View style= {{flex: 1, opacity: 0.8, alignItems: 'center', paddingTop: 20 }} >
                    {/* This is for the location, and date */}
                    <View style = {{ flexDirection: 'row', alignContent: 'space-between', flex: 1}}>
                       { <View style = {{ flex: 1}} >
                             <Text>
                                {ref}
                            </Text> 
                        </View>  }
                        <View style = {{ flexDirection: 'row', alignItems: 'flex-end', flex: 1}} >
                             <Image source={require('../../assets/location1.png')} />                    
                            <Text style = {{fontSize: 25, fontWeight: 700}}>
                                {city || "Location"}
                             </Text>
                        </View>
                        
                        <View style = {{flexDirection: 'row-reverse',alignItems:'flex-end', flex: 1, paddingRight: 20}}>
                            { <TouchableOpacity 
                                onPress={() => setRef(ref + 1)}
                            >
                                <Image source={require('../../assets/icons8-search-30.png')}/>
                            </TouchableOpacity>}
                        </View>
                            
                    </View>


                    <Text style = {{fontSize: 15, fontWeight: 500, opacity: 0.7, marginBottom: 20, paddingTop: 10 }}>
                        {weekDay[todayDate.getDay()]} {months[todayDate.getMonth()]} {todayDate.getFullYear()}
                    </Text>

                </View>
    )
}

export default TopInfo;