import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

function WeatherGraph({points}){


    return(
        <View >
            <LineChart 
                data={points}
                height={145}
                yAxisOffset={20}
                yAxisMinValue={20}
                yAxisMaxValue={120}
                yAxisLabelWidth={40}
                hideRules
                hideDataPoints
                curved
                curveType="quadratic"
                curvature={0.3}

                color= "blue"
                thickness={5}
            />
        </View>
    );
}

export default WeatherGraph;