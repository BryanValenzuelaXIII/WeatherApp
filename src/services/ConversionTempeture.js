import React from "react";

function KelvinToFahrenheit (kelvin) {
    return ((kelvin - 273.15) * (9/5) + 32).toFixed(0);
}

export {KelvinToFahrenheit};