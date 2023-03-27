export class miniDayWeather{
    constructor(name,minTemperature,maxTemperature){
        this._name=name;
        this._minTemperature=minTemperature;
        this._maxTemperature=maxTemperature;
    }

    get name() { return this._name; }
    set name(value) { this._nama=value; }

    get minTemperature() { return this._minTemperature; }
    set minTemperature(value) { this._minTemperature=value; }

    get maxTemperature() { return this._maxTemperature; }
    set maxTemperature(value) { this._maxTemperature=value; }

    static createMiniDayWeather(obj){
        let name=obj.date; 
        let minTemp=obj.day.mintemp_c;
        let maxTemp=obj.day.maxtemp_c;

        return new miniDayWeather(name,minTemp,maxTemp);
    }
}