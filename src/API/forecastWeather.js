import { key } from "../key.js";


async function getLocationWeather(location){

    let response= await fetch("http://api.weatherapi.com/v1	/forecast.json?days=10&key="+key+"&q="+location,{mode:"cors"});
    let data=await response.json();
    return data;
}


export {getLocationWeather};