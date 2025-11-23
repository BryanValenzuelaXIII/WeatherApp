import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";


function WelcomePage(){

    //const horizontalScreen = Dimensions.get.

    return(
            <LinearGradient
                colors={['rgba(143,128,209,1)', 'rgba(214,209,230,1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.1, y: 1 }}   // matches ~175deg angle
                style = {{flex: 1}}
            >
                <Image source={require('/Users/bvalenzuela/Desktop/testProjects/WeatherApp/assets/storm_728136.png')} 
                style ={{transform: [{ translateX: 90} , {translateY: 120} ]}} />

                <Text style = {{fontWeight: 700, fontSize: 50 , color: 'white', borderRadius: 10,
                    transform: [{ translateX: 90} , {translateY: 175}]
                }}>
                    Weather
                    </Text>   
            </LinearGradient>
            
    );
}

export default WelcomePage;