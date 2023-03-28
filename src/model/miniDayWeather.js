import { getDayByDate } from "../API/getDayByNumber";

export class miniDayWeather{
    constructor(name,minTemperature_c,maxTemperature_c,minTemperature_f,maxTemperature_f){
        this._name=name;
        this._minTemperature_c=minTemperature_c+" °C";
        this._maxTemperature_c=maxTemperature_c+" °C";
        this._minTemperature_f=minTemperature_f+" °F";
        this._maxTemperature_f=maxTemperature_f+" °F";
    }

    get name() { return this._name; }
    set name(value) { this._name=value; }

    get minTemperature_c() { return this._minTemperature_c; }
    set minTemperature_c(value) { this._minTemperature_c=value; }

    get maxTemperature_c() { return this._maxTemperature_c; }
    set maxTemperature_c(value) { this._maxTemperature_c=value; }

    get minTemperature_f() { return this._minTemperature_f; }
    set minTemperature_f(value) { this._minTemperature_f=value; }

    get maxTemperature_f() { return this._maxTemperature_f; }
    set maxTemperature_f(value) { this._maxTemperature_f=value; }

    static createMiniDayWeather(obj){
        let name=getDayByDate(obj.date);
        let minTemp_c=obj.day.mintemp_c;
        let maxTemp_c=obj.day.maxtemp_c;
        let minTemp_f=obj.day.mintemp_f;
        let maxTemp_f=obj.day.maxtemp_f;
        return new miniDayWeather(name,minTemp_c,maxTemp_c,minTemp_f,maxTemp_f);
    }
}