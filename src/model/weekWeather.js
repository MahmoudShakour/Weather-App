import { miniDayWeather } from "./miniDayWeather";

export class weekWeather{
    constructor(day){
        this._day=[];
        for(let i=0;i<7;i++){
            this._day[i]=day[i];
        }
    }

    get day(){ return this._day; }
    set day(value){ this._day=value; }
    

    static createWeekWeather(weekWeatherObj){
        let days=[];
        for(let i=0;i<7;i++){
            let day=weekWeatherObj.forecast.forecastday[i];
            day=miniDayWeather.createMiniDayWeather(day);
            days.push(day);
        }
        return new weekWeather(days);
    }
}