import React from "react";
import {View, Text, Image} from 'react-native';

function PillInfo({weather}){

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "space-around",
                borderRadius: 50,
                marginBottom: 10,
                width: '80%'
            }}
        >
            {weather?.data?.main?.temp ? (
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 10,
                    }}
                >
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../../assets/icons8-humidity-30.png")} />
                        <Text style={{ textAlign: "center", fontSize: 18 }}>
                            Humidity {"\n" + weather.data.main.humidity}
                        </Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../../assets/icons8-wind-30.png")} />
                        <Text style={{ textAlign: "center", fontSize: 18 }}>
                            Wind {"\n" + weather.data.wind.speed} Km/hr
                        </Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../../assets/icons8-visibility-30.png")} />
                        <Text style={{ textAlign: "center", fontSize: 18 }}>
                            Visibility {"\n" + weather.data.visibility / 100 + "%"}
                        </Text>
                    </View>
                </View>
            ) : (
                <Text>No information</Text>
            )}
        </View>
    )
}

export default PillInfo;