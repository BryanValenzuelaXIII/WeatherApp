import React from "react";
import {KelvinToFahrenheit} from "../utils/ConversionTempeture"

function MultiDayWeather({data}){

    if (!data || !data.list) {
        return [];
    }

    //const template = [{date: props.date, maxTemp: 80, minTemp: 60, icon: 'code'}]
    const dates = [];
    const today = new Date();

    for(let day = 1; day < 5; day++){
        const nextDate = new Date(today)
        nextDate.setDate(nextDate.getDate() + day);
        //dates.push({date: new Date(nextDate) });
        const formattedSpecificDate = nextDate.toISOString().split('T')[0];
        //console.log(formattedSpecificDate);

        const matches  = data.list.filter((weatherDay) =>
        weatherDay.dt_txt.includes(formattedSpecificDate));

        //console.log('loop ' + day);
        //console.log(matches);

        const minTemp = matches.reduce(
            (min, current) => Math.min(current.main.temp_min, min) , Infinity)
       // console.log(minTemp);

        const maxTemp = matches.reduce(
            (max, current) => Math.max(current.main.temp_max, max) , 0)
        //console.log(maxTemp);

        //Here is the most used Icon--------------
       // console.log(matches[4].weather[0].icon)
            const mostUsedIcon = matches[4].weather[0].icon;
        //----------------------------------------

        dates.push({day: nextDate.toDateString().split(' ')[0],
        max_temp: KelvinToFahrenheit(maxTemp),
        min_temp: KelvinToFahrenheit(minTemp),
        icon: mostUsedIcon,
        });


    }


    //console.log(dates);
    return dates;
}

 function NextTempetures({data}){

     if (!data || !data.list) {
         return [];
     }

     const totalData = 10;
     const tempOfHour = []

     for(let i = 0; i < totalData; i++){
         const tempeture =  KelvinToFahrenheit(data.list[i].main.temp);
         const time = data.list[i].dt_txt.split(' ')[1].slice(0, 5);

         tempOfHour.push({value: Number(tempeture), label: time})
         //console.log(tempeture + " " + time);
     }
     console.log(tempOfHour);

     return tempOfHour;
 }

export {MultiDayWeather, NextTempetures};