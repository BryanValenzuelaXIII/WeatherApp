import React, {useEffect} from "react";
import { View, Text, Image, PermissionsAndroid, TouchableOpacity, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GetLocation from 'react-native-get-location'


function WelcomePage(){

    //const horizontalScreen = Dimensions.get.
    const navigation = useNavigation();
    
     /*useEffect(() => {
    const requestLocation = async () => {
      try {
        // Request Android runtime permission
        if (Platform.OS === "android") {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Permission",
              message: "This app needs access to your location to show accurate weather.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK",
            }
          );

          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Location permission denied on Android");
            return;
          }
        }

        // Get current location for both Android and iOS
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
        });

        console.log("User location:", location);
        // Optionally, save location in state or Context

      } catch (error) {
        console.warn("Location error:", error);
      }
    };

    requestLocation();
  }, []);
*/
        

    return(
        
            <LinearGradient
                colors={['rgba(143,128,209,1)', 'rgba(214,209,230,1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.1, y: 1 }}   // matches ~175deg angle
                style = {{flex: 1}}
            >
                <View style = {{flex: 2}}>
                <Image source={require('../../assets/storm_728136.png')} 
                style ={{transform: [{ translateX: 90} , {translateY: 120} ]}} />

                <Text style = {{fontWeight: 700, fontSize: 50 , color: 'white', borderRadius: 10,
                    transform: [{ translateX: 90} , {translateY: 175}]
                }}>
                    Weather
                    </Text>
                
                <Text style = {{fontWeight: 700, fontSize: 50 , color: 'white', borderRadius: 10, opacity: 0.65,
                    transform: [{ translateX: 70} , {translateY: 160}]
                }}>
                    Forecasts
                    </Text>
                </View>
                <View 
                style = {{flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start', }} >
                    <TouchableOpacity 
                      onPress={() => navigation.navigate('WeatherPage')}
                    style ={{
                        borderRadius: 25,
                        //paddingTop: 30, //padding is size
                        paddingVertical: 5,
                        paddingBottom: 10,
                        paddingHorizontal: 100,
                        backgroundColor: 'darkblue'
                    }}>
                        <View style = {{justifyContent: 'center'}} >
                            <Text 
                            style={{ textAlign: "center",
                            fontSize: 25,
                            fontWeight: '500',
                            justifyContent: 'center',
                            color: 'white'}} >
                                Get Start
                            </Text>
                        </View>
                    </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        >
                          <Text>
                          Login
                          </Text>
                      </TouchableOpacity>

                </View> 
            </LinearGradient>
            
    );
}

export default WelcomePage;