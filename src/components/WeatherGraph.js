import React, {useContext} from "react";
import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { WeatherComponentContext } from "../utils/WeatherComponentContext";

function WeatherGraph(){

    const {puntos} = useContext(WeatherComponentContext);

    return(
        <View >
            <LineChart 
                data={puntos}
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