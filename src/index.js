import { View } from "./view/View";
import { getLocationWeather } from "./API/forecastWeather";
import { dayWeather } from "./model/dayWeather";
import { weekWeather } from "./model/weekWeather";
// import {weekWeather} from "./model/weekWeather";


async function main(){

    let response=await getLocationWeather("dekernes");
    console.log(response);
    let todayWeather=dayWeather.createdayWeather(response);
    let thisWeekWeather=weekWeather.createWeekWeather(response);

    View.init();
    View.loadHomePage(todayWeather,thisWeekWeather);

}





main();