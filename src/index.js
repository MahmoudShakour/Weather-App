import { View } from "./view/View";
import { getLocationWeather } from "./API/forecastWeather";
import { dayWeather } from "./model/dayWeather";
import { weekWeather } from "./model/weekWeather";

async function handleSearchButton(location){
    let response=await getLocationWeather(location);
    let todayWeather=dayWeather.createdayWeather(response);
    let thisWeekWeather=weekWeather.createWeekWeather(response);
    View.loadHomePage(todayWeather,thisWeekWeather);
}



async function main(){

    let response=await getLocationWeather("dekernes");
    let todayWeather=dayWeather.createdayWeather(response);
    let thisWeekWeather=weekWeather.createWeekWeather(response);
    console.log(response);
    View.loadHomePage(todayWeather,thisWeekWeather);
    View.bindSearchButton(handleSearchButton);
    View.bindToggleButton(todayWeather,thisWeekWeather);
}

main();

