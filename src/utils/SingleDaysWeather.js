//import React from "react";

function SingleDaysWeather(/*props*/){

    //const template = [{date: props.date, maxTemp: 80, minTemp: 60, icon: 'code'}]
    const nextDate = new Date();

    for(let day = 1; day < 6; day++){
        nextDate.setDate(nextDate.getDate() + 1);
        console.log(nextDate.toDateString());
    }
}